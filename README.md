## The Martian - Rationing System

### Scope of Assignment

    1. This assignment tests your programming skills on the below areas
        a. Data structures and Algorithms
        b. Object-oriented analysis and design
        c. Client-Server technologies
        d. Data Persistence
    2. This is a full-stack test which will test both frontend and backend skills. You can use the HTML mockups provided or develop your own frontend.
    3. Duration of this assignment is 48 hours.
    4. Evaluation criteria are as follows
        a. Use of the SOLID principle
        b. Readability and Extensibility of the code
        c. Unit test and Code coverage
        d. Completion of Assignment
        e. Domain design and Documentation

### Problem Statement 
You are part of the Ares III mission to Mars exploring “Acidalia Planitia” plain on Mars in the year 2035. Due to unfortunate circumstances involving a dust storm, you got stranded on Mars alone with no communication to your team or Earth’s command center. Your surface habitat ("Hab") on Mars contains a limited inventory of food supplies. Each of these supplies is in the form of a packet containing either Food or Water. The food items have details of the content, expiry date and calories they provide. The water packet contains only the details of the quantity in liters and doesn’t expire. To survive, an average human needs 2500 calories and 2 liters of water per day. You are also worried about the wastage that might occur if the food is not consumed before the expiry date. Being a brilliant programmer, you have decided to create an algorithm that can ration the food based on daily requirement and provide you inputs on which packet to consume on a given day and how many days will you survive with the available inventory.

### Instructions
    1. Develop a web application with the following features
        a. Add Ration: Record the details of the supplied packet to a storage mechanism (DB,
        File.. etc)
        b. View Inventory: Retrieve the details of all the supply packets in the inventory
        c. Delete Ration: Ability to delete a supply packet from the inventory that has been
        consumed or needs an update.
        d. View Schedule: Retrieve the available inventory in the storage mechanism and generate
        the schedule.
    2. Each of the supply packets will not have rations more than your daily requirement of 2500 calories or 2 liters. Also, there should not be any leftovers, i.e your allowed to choose packets (food or water) that exceed your daily requirement but the amount exceeded cannot be used another day.
    3. If water packets run out before food supply (or vice versa), the schedule should stop on that day and consider it as last surviving day of the Martian