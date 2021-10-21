package com.itcrowd.data;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Springboot API for interacting with mySQL database through simple endpoints.
 * See resources/application.properties file for configs.
 * Endpoints are defined in controller/
 * Run with: mvn spring-boot:run
 */
@SpringBootApplication
public class DataApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(DataApplication.class, args);
	}

}
