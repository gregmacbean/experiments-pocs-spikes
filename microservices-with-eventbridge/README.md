Hi!

This experiment is to show how we can use event bridge to integration different services through messages (Events & Commands)

For Events
- Any service can publish interesting Events eg. OrganisatonCreated
- Any service can add a rule & target to themselves to process only Events they care about
- Services pull events onto a queue for processing to add a layer of resiliance. This includes a dead-letter-queue for handling error scenarios
- Todo: Events should be validated against an json schema

For Commands
- Any service can send a Command to the bus
- Commands are owned by a single service
- Only the owning service can/should create a rule & target to process the Command
- As before the services pulls the Command onto a queue for processing
- Todo: Commands should be validated against a json schema
