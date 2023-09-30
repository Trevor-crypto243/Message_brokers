https://www.youtube.com/watch?v=0vXWap8dHHc&list=PLrwNNiB6YOA3Z3JfOUMKE6PmnpmVAJgTK&index=2

rabbitmq.com/tutorials - documentation

Message Brokers
Used with microservices

Some include
    1. Rabbit Mq - most popular
    2. Bull
    3. RMSQ - reddis simple messaging
    4. GRPC
    5. Apache Kafka
    6. Pub/Sub - Gcloud
    7. Azure - Service bus
    8. Amazon - ASQS - Wmazon Simple Que Service

Rabbit MQ and laravel tutorial

________________RABBIT MQ________________
    Hello World
    Publish/subscribe
    Work Queues
    Routing
    Topics
    RPC


    ________Exchange Types and Use Cases
-Frequently Used    
-Everything starts with an application that wants to send a message - producer/publisher
-The publisher connect tot the message broker(Rabbit) and publishes the message to an exchange
-It also sends a routing key
-The exchange then passes the message to the queues
-The exchange uses certain rules(bindings) to determine which queues to route the message to 
-The message is then sent to the consumer(Application that uses that message)
-Consumers can pull messages from a que
-The consumer sends a message back to the broker
-The broker can then proceed to clear the message


The exchanges and bindings are the most complex
Ques are bound to a certain type of exchange


Exchanges
    ______Fanout exchange
        Ignores routing key
        Routes messages to all queues bound to it
        Every que bound to it is going to receive that exchange
        Its the simplest exchange
        Use case
            -Sports updates
            -Distributed systems
            -Group charts
            -Broadcasting like socket.io
    
    ______Direct exchange
        Delivers messages to queues based on a message routing key(from the publisher)
        Its pretty basic
        It is the default exchange type
        Use cases
            -Messages to individual players
            -Notifications to specific geopgraphic locations
            -Delivering notifications to individual software services in the network
            -Simple scenarios

    _______Topic exchange
        Quite complicated
        Routes messges to queues based on patterns in the routing key (regex in bindings)
        # - 0 or more words after a key, anything with 
        sale.#.west-1
        the routing key name plus ....
        can have many words
        * - has to be exactly one word
        sale.*.west-1

        Use cases
            Updates that involve categorization or tagging
            Clustering
            Background task processing
            Complex scenarrios
            Flexibility
            Filtering, categorisation
            Scalability



    _________Headers exchange
        It's like direct exchange but ignores the routing key and looks at the headers that were sent with the message    
        x-match = all - headers must match
        x-match = any - headers must not match all
        Use cases   
        Special filtering





___________HEllO World_________
Basic mq task
Sending a message and consuming it

    Setting Up with docker
        docker run -d --rm --name rabbitmq -p 5672:5672 rabbitmq:3
