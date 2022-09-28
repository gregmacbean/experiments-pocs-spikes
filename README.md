Hi!

This POC is to show how we can use event bridge to integration different services through messages (Events & Commands)

Principals relating to Events:

- Any service can publish interesting Events eg. OrganisatonCreated
- Any service can add a rule & target to themselves to process only Events they care about
- Services pull events onto a queue for processing to add a layer of resiliance. This includes a dead-letter-queue for handling error scenarios

Principals relating to Commands:

- Any service can send a Command to the bus eg. SendNotification
- Commands are owned by a single service - the owner
- Only the owner should create a rule & target to process the Command
- As before the services pulls the Command onto a queue for processing with a dlq

Things we could do if they became important:

- error handling at the bus level
- archiving of bus messages for replay (if necessary)
- schema validation & discovery (json schema)
- CW dashboards for queue metrics & alerting
- auditing resources should be seperate from any single service (it's cross cutting)
- take into account idempotency of message processing
- add correlation information from bus message to sqs message for request tracing
