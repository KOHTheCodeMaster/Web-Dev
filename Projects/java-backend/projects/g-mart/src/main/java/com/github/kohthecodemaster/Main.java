package com.github.kohthecodemaster;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@Slf4j
//@CrossOrigin(origins = "http://localhost:4200") // Allow only specific frontend
public class Main {

    public static void main(String[] args) {

        log.info("\n\n---------------------------\nApplication Starting...\n----------------------------\n");
        System.out.println("Current Working Directory: " + System.getProperty("user.dir"));
//        test1();

        SpringApplication.run(Main.class);

    }

    public static void test1() {

        //  Create Dummy Data Logs
        log.info("\n\n---------------------------\nCreating dummy data...\n----------------------------\n");
        for (int i = 0; i < 200; i++) log.info("This is a test log message. " + i);
        log.info("\n\n---------------------------\nSample log message of 20 KB created.\n----------------------------\n");
    }

}
