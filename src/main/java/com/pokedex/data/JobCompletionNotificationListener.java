package com.pokedex.data;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import com.pokedex.models.PokemonAbility;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;

@Component
public class JobCompletionNotificationListener  extends JobExecutionListenerSupport{

  private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

  private final EntityManager em;

  private final String POKEMON_ABILITY_QRY = "select p.pokedexNumber, p.abilities from Pokemon p";
  

  @Autowired
  public JobCompletionNotificationListener(EntityManager em) {
      this.em = em;
  }
    

  @Override
  @Transactional
  public void afterJob(JobExecution jobExecution) {
    if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
      log.info("!!! JOB FINISHED! Time to verify the results");

      persistPokemonAbility();
     
    }
  }


  private void persistPokemonAbility() {

      em.createQuery(POKEMON_ABILITY_QRY, Object[].class)
      .getResultList()
      .stream()
      .forEach(abilityRecord->{
        Integer pokeId = (Integer) abilityRecord[0];
        String abilities = (String) abilityRecord[1];

        formatAbilities(abilities)
        .stream()
        .forEach(ab->em.persist(new PokemonAbility(pokeId,ab)));
        
      });
  }

 
  private List<String> formatAbilities(String abilities){

    return Arrays.asList(trim(abilities).split(","))
            .stream()
            .map(ab-> new String(trim(ab.trim())))
            .collect(Collectors.toList());

  }

  private String trim(String str){
      return str.substring( 1, str.length() - 1 );
  }

}

