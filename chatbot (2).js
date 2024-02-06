
    <script>
    // JavaScript logic for chatbot

        function dissolveIntoChatbot() {
            var humanAiImg = document.getElementById("human-ai-img");
            humanAiImg.classList.add("dissolve"); // Apply the dissolve class to the image
        }





// JavaScript logic for chatbot
        function sendMessage() {
    // Get user input
    var userInput = document.getElementById("user-input").value.trim();
        if (!userInput) return;

        // Display user message
        displayMessage(userInput, false);

        // Process user input and generate bot response
        var botResponse = getBotResponse(userInput);

        // Display bot response
        displayMessage(botResponse, true);

        // Clear input field
        document.getElementById("user-input").value = "";

        // Scroll to bottom of chat container
        var chatContainer = document.getElementById("chat-container");
        chatContainer.scrollTop = chatContainer.scrollHeight;
}

        function displayMessage(message, isBot) {
    var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        if (isBot) {
            messageElement.classList.add("bot");
    } else {
            messageElement.classList.add("user");
    }
        messageElement.textContent = message;

        document.getElementById("chat-container").appendChild(messageElement);
}


        /* trying to make the enter button work */
        function handleKeyPress(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        }

        function sendMessage() {
            var userInput = document.getElementById("user-input").value.trim();
            if (!userInput) return;

            displayMessage(userInput, false);

            var botResponse = getBotResponse(userInput);

            displayMessage(botResponse, true);

            document.getElementById("user-input").value = "";

            var chatContainer = document.getElementById("chat-container");
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }




        // Function to generate bot response based on user input
        function getBotResponse(userInput) {
    // Example of simple response based on user input
    if (userInput.toLowerCase().includes("best")) {
        return "click around this website to see my best work!";
    } else if (userInput.toLowerCase().includes("katy")) {
        return "alright...thats it...activate husband.exe!";
    } else if (userInput.toLowerCase().includes("hello")) {
        return "Hello to you too, thanks for taking the time to take a look at this website!";
    } else if (userInput.toLowerCase().includes("availability")) {
        return "I am available immediatley";
    } else if (userInput.toLowerCase().includes("notice")) {
        return "No notice, I am a freelance Physics Tutor atm so I can be flexible lets do this!!!";
    } else if (userInput.toLowerCase().includes("no")) {
        return "alright...thats it...activate skynet.exe!";
    } else if (userInput.toLowerCase().includes("contact")) {
        return "You can reach me at ramirez_xavier@hotmail.com or 07780 330 647.";
    } else if (userInput.toLowerCase().includes("location")) {
        return "I am currently located in Edinburgh, UK.";
    } else if (userInput.toLowerCase().includes("say")) {
        return "erm...Kirk's middle name is Tiberius!";
    } else if (userInput.toLowerCase().includes("dad")) {
        return "is that you big man, you rock!";
    } else if (userInput.toLowerCase().includes("mum")) {
        return "ah, the entire foundation of it all!";
    } else if (userInput.toLowerCase().includes("handsome")) {
        return "Yes I am thanks!";
    } else if (userInput.toLowerCase().includes("fire")) {
        return "fire FIRE! GET TO THE CHOPPER!!";
    } else if (userInput.toLowerCase().includes("rich")) {
        return "triple A...man's can jump!";
     } else if (userInput.toLowerCase().includes("philosophy")) {
        return "my way is to break things down to small pieces and creatively rebuild!";

    } else if (userInput.toLowerCase().includes("Hi")) {
        return "Whats up doc?";
    } else if (userInput.toLowerCase().includes("Yo")) {
        return "might be onto something!";
    } else if (userInput.toLowerCase().includes("trek")) {
        return "I am in lets build USS Enterprise!";
    } else if (userInput.toLowerCase().includes("go")) {
        return "where?";
    } else if (userInput.toLowerCase().includes("name")) {
        return "Xavier 'tiberius' Ramirez...!";
    } else if (userInput.toLowerCase().includes("old")) {
        return "old enough to know 'things'";
    } else if (userInput.toLowerCase().includes("age")) {
        return "like a fine wine, but not expensive...yet";
    } else if (userInput.toLowerCase().includes("live")) {
        return "Mighty Edinburgh!";
    } else if (userInput.toLowerCase().includes("insurance")) {
        return "erm... what happened??";
    } else if (userInput.toLowerCase().includes("fire")) {
        return "Get to the Chopper!";
    } else if (userInput.toLowerCase().includes("pandemic")) {
        return "hachooooooo!";
    } else if (userInput.toLowerCase().includes("bang")) {
        return "bang... or BANGzinga!";
    } else if (userInput.toLowerCase().includes("leonard")) {
        return "Sheldon!!!!!!!!!!!!";
    } else if (userInput.toLowerCase().includes("Sheldon")) {
        return "it's only logical captain!";
    } else if (userInput.toLowerCase().includes("issy")) {
        return "bella b !";
    } else if (userInput.toLowerCase().includes("hhelp")) {
        return "your spelling!";
    } else if (userInput.toLowerCase().includes("say")) {
        return "erm...Kirk's middle name is Tiberius!";
    } else if (userInput.toLowerCase().includes("look")) {
        return "erm thats an interesting question, perhpas internally? ";

    } else if (userInput.toLowerCase().includes("weather")) {
        return "The highest temperature ever recorded on Earth was 56.7°C (134°F) in Furnace Creek Ranch, Death Valley, California on July 10, 1913.";
    } else if (userInput.toLowerCase().includes("time")) {
        return "One day on Venus is longer than one year on Venus. Venus rotates on its axis very slowly, taking about 243 Earth days to complete one rotation.";
    } else if (userInput.toLowerCase().includes("food")) {
        return "The fear of vegetables is called Lachanophobia.";
    } else if (userInput.toLowerCase().includes("music")) {
        return "Music can reduce chronic pain by more than 20% and can alleviate depression by up to 25%.";
    } else if (userInput.toLowerCase().includes("money")) {
        return "The average person produces enough saliva in their lifetime to fill two swimming pools. Saliva helps with digestion, protects your teeth, and even keeps your mouth clean.";
    } else if (userInput.toLowerCase().includes("love")) {
        return "Oxytocin, often referred to as the 'love hormone', is released during moments of intimacy and bonding. It plays a role in social bonding, childbirth, and lactation.";
    } else if (userInput.toLowerCase().includes("health")) {
        return "Laughing 100 times is equivalent to 15 minutes of exercise on a stationary bicycle.";
    } else if (userInput.toLowerCase().includes("sleep")) {
        return "A giraffe only needs 5 to 30 minutes of sleep in a 24-hour period.";
    } else if (userInput.toLowerCase().includes("science")) {
        return "A teaspoonful of neutron star material would weigh about 6 billion tons, approximately the same as Mount Everest.";
    } else if (userInput.toLowerCase().includes("technology")) {
        return "The first computer programmer was Ada Lovelace, who created an algorithm for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.";
    } else if (userInput.toLowerCase().includes("nature")) {
        return "The tongue of a blue whale weighs around 2.7 tons (2,700 kilograms), which is about the size of an average Asian elephant!";
    } else if (userInput.toLowerCase().includes("history")) {
        return "The shortest war in history lasted only 38 minutes. It was between Britain and Zanzibar on August 27, 1896.";
    } else if (userInput.toLowerCase().includes("sports")) {
        return "The Olympic Games were originally a religious festival held in honor of Zeus, the king of the gods, and took place in Olympia, Greece.";
    } else if (userInput.toLowerCase().includes("language")) {
        return "The longest word in the English language is pneumonoultramicroscopicsilicovolcanoconiosis, a lung disease caused by inhaling very fine silica particles found in volcanic dust.";
    } else if (userInput.toLowerCase().includes("travel")) {
        return "The Great Wall of China is not visible from space with the naked eye, contrary to popular belief. It can only be seen from low Earth orbit under specific conditions.";
    } else if (userInput.toLowerCase().includes("books")) {
        return "The largest book in the world is 'The Klencke Atlas', which measures 1.75 meters tall (5 feet 9 inches) when open and contains 40 maps.";
    } else if (userInput.toLowerCase().includes("movies")) {
        return "The first movie ever to be filmed was 'Roundhay Garden Scene', filmed in 1888 by inventor Louis Le Prince.";
    } else if (userInput.toLowerCase().includes("animals")) {
        return "The only continent without reptiles or snakes is Antarctica.";
    } else if (userInput.toLowerCase().includes("space")) {
        return "The Sun makes up 99.8% of the total mass of the entire solar system.";
    } else if (userInput.toLowerCase().includes("plants")) {
        return "Bamboo can grow up to 35 inches (91 cm) in a single day, making it one of the fastest-growing plants on Earth.";
    } else if (userInput.toLowerCase().includes("math")) {
        return "The word 'mathematics' comes from the Greek word 'mathema', which means 'subject of instruction' or 'learning'.";
    } else if (userInput.toLowerCase().includes("sports")) {
        return "Golf is the only sport to have been played on the moon. Alan Shepard, an astronaut, famously hit two golf balls on the lunar surface during the Apollo 14 mission in 1971.";
    } else if (userInput.toLowerCase().includes("body")) {
        return "Your brain is sometimes more active when you're asleep than when you're awake. It's responsible for generating dreams, processing emotions, and consolidating memories during sleep.";
    } else if (userInput.toLowerCase().includes("dreams")) {
        return "Blind people also dream. Those who were born blind experience dreams involving other senses such as sound, smell, and touch.";
    } else if (userInput.toLowerCase().includes("age")) {
        return "The rate at which you perceive time is directly related to your age. This means that time seems to pass more quickly as you get older.";
    } else if (userInput.toLowerCase().includes("colors")) {
        return "The color of a chili pepper is not determined by its species or variety but by the degree of ripeness. Green chilies are unripe, while red ones are fully ripe.";
    } else if (userInput.toLowerCase().includes("dreams")) {
        return "Blind people also dream. Those who were born blind experience dreams involving other senses such as sound, smell, and touch.";
    } else if (userInput.toLowerCase().includes("age")) {
        return "The rate at which you perceive time is directly related to your age. This means that time seems to pass more quickly as you get older.";
    } else if (userInput.toLowerCase().includes("colors")) {
        return "The color of a chili pepper is not determined by its species or variety but by the degree of ripeness. Green chilies are unripe, while red ones are fully ripe.";

    } else if (userInput.toLowerCase().includes("wife")) {
        return "lol yes...";
    } else if (userInput.toLowerCase().includes("education")) {
        return "I hold a Physics BSc (Hons) 2.1 from THE OPEN UNIVERSITY (2023) and a Sports Technology BSc (Hons) 2.2 from LOUGHBOROUGH UNIVERSITY (2004).";
    } else if (userInput.toLowerCase().includes("skills")) {
        return "I have a range of skills including Python programming, IBM certifications in Machine Learning and Deep Learning, website design, SQL database management, and more.";
    } else if (userInput.toLowerCase().includes("strengths")) {
        return "Analysis and communication...";
    } else if (userInput.toLowerCase().includes("weaknesses")) {
        return "remembering to take breaks so I keep doing high quality work! it makes a huge differnce";
    } else if (userInput.toLowerCase().includes("certifications")) {
        return "I am certified in Machine Learning, Keras (Deep Learning), Computer Vision/XML by IBM.";
    } else if (userInput.toLowerCase().includes("continuous learning")) {
        return "Continuous learning is a core value for me, and I am always looking for opportunities to expand my skillset.";
    } else if (userInput.toLowerCase().includes("career goals")) {
        return "I am seeking a role where I can contribute to solving challenges that make our daily lives better.";
    } else if (userInput.toLowerCase().includes("hobbies")) {
        return "In my spare time, I enjoy playing videogames, music, and making models.";
    } else if (userInput.toLowerCase().includes("references")) {
        return "References and further details are available upon request.";
    } else if (userInput.toLowerCase().includes("about me")) {
        return "I am a driven individual seeking a role where I can contribute to solving challenges that make our daily lives better.";
    } else if (userInput.toLowerCase().includes("coding languages")) {
        return "I am proficient in Python and C++.";
    } else if (userInput.toLowerCase().includes("alex")) {
        return "'We are all in the gutter but some of us are looking at the stars' - Oscar Wilde";
    } else if (userInput.toLowerCase().includes("goodbye")) {
        return "Goodbye! stay frosty!";
    } else if (userInput.toLowerCase().includes("hire")) {
        return "I am a great balance of a highly technical people person!";
    } else if (userInput.toLowerCase().includes("why")) {
        return "I can make this work and do so with style!";
    } else if (userInput.toLowerCase().includes("goodbye")) {
        return "Goodbye! stay frosty!";
    } else if (userInput.toLowerCase().includes("experience")) {
        return "I have a Physics degree, and 5 years coding experience!";
    } else if (userInput.toLowerCase().includes("richard")) {
        return "triple A...man's can jump!";
    } else if (userInput.toLowerCase().includes("looking")) {
        return "I want to make a difference!";
    } else if (userInput.toLowerCase().includes("motivation")) {
        return "I want to push the boundaries of whats possible further forward...";
    } else if (userInput.toLowerCase().includes("daniel")) {
        return "Mae the force be with you...";
    } else {
        return "There are so many key words but that aint't one! try another !";
    }
        }


    </script>


