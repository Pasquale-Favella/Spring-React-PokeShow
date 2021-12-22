package com.pokedex.data;

import javax.sql.DataSource;

import com.pokedex.models.Pokemon;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.support.RunIdIncrementer;
import org.springframework.batch.item.database.BeanPropertyItemSqlParameterSourceProvider;
import org.springframework.batch.item.database.JdbcBatchItemWriter;
import org.springframework.batch.item.database.builder.JdbcBatchItemWriterBuilder;
import org.springframework.batch.item.file.FlatFileItemReader;
import org.springframework.batch.item.file.builder.FlatFileItemReaderBuilder;
import org.springframework.batch.item.file.mapping.BeanWrapperFieldSetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

@Configuration
@EnableBatchProcessing
public class BatchConfig {

    private final String[] FIELD_NAMES = new String[] { "abilities", "against_bug", "against_dark", "against_dragon", "against_electric",
    "against_fairy", "against_fight", "against_fire", "against_flying", "against_ghost", "against_grass", "against_ground", "against_ice",
    "against_normal", "against_poison", "against_psychic", "against_rock", "against_steel", "against_water", "attack", "base_egg_steps", "base_happiness", "base_total", "capture_rate", "classfication",
    "defense", "experience_growth", "height_m", "hp", "japanese_name", "name", "percentage_male", "pokedex_number", "sp_attack", "sp_defense", "speed", "type1", "type2",
    "weight_kg", "generation", "is_legendary" };

    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

    @Bean
    public FlatFileItemReader<PokemonInput> reader() {
        return new FlatFileItemReaderBuilder<PokemonInput>().name("PokemonItemReader")
                .resource(new ClassPathResource("pokemon.csv"))
                .delimited()
                .names(FIELD_NAMES)
                .fieldSetMapper(new BeanWrapperFieldSetMapper<PokemonInput>() {
                    {
                        setTargetType(PokemonInput.class);
                    }
                }).build();
    }

    @Bean
    public PokemonDataProcessor processor() {
        return new PokemonDataProcessor();
    }

    @Bean
    public JdbcBatchItemWriter<Pokemon> writer(DataSource dataSource) {
        return new JdbcBatchItemWriterBuilder<Pokemon>()
                .itemSqlParameterSourceProvider(new BeanPropertyItemSqlParameterSourceProvider<>())
                .sql("INSERT INTO pokemon (pokedex_number, attack, base_total, defense, hp, name, sp_attack, sp_defense, speed, type1, type2, generation, is_legendary, abilities ,against_bug, against_dark, against_dragon, against_electric, against_fairy, against_fight, against_fire, against_flying, against_ghost, against_grass, against_ground, against_ice, against_normal, against_poison, against_psychic, against_rock, against_steel, against_water) "
                        + " VALUES (:pokedexNumber, :attack, :baseTotal, :defense, :hp, :name, :spAttack, :spDefense, :speed, :type1, :type2, :generation, :isLegendary ,:abilities ,:againstBug, :againstDark, :againstDragon, :againstElectric, :againstFairy, :againstFight, :againstFire, :againstFlying, :againstGhost, :againstGrass, :againstGround, :againstIce, :againstNormal, :againstPoison, :againstPsychic, :againstRock, :againstSteel, :againstWater)")
                .dataSource(dataSource)
                .build();
    }

    @Bean
    public Job importUserJob(JobCompletionNotificationListener listener, Step step1) {
        return jobBuilderFactory
            .get("importUserJob")
            .incrementer(new RunIdIncrementer())
            .listener(listener)
            .flow(step1)
            .end()
            .build();
    }

    @Bean
    public Step step1(JdbcBatchItemWriter<Pokemon> writer) {
        return stepBuilderFactory
            .get("step1")
            .<PokemonInput, Pokemon>chunk(10)
            .reader(reader())
            .processor(processor())
            .writer(writer)
            .build();
    }
    
}

