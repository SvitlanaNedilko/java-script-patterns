# Command
Pattern that turns a request into a stand-alone object that contains all information about the request. This transformation allows for parameterization of methods with different requests, queuing of requests, logging of requests, and providing support for undoable operations. 

## Real-World Use Cases
1. Undo/Redo Functionality: In a text editor, users can perform various actions (e.g., typing, deleting). Each action should be undoable and redoable.
2. Button Actions: In a application, buttons can perform various actions. Each action can be encapsulated as a command object.
3. Macro Commands: You want to execute a series of commands as a single command. This is useful in scenarios like batch processing or complex operations.
4. Queue Requests: In a job scheduling system, you want to queue jobs (commands) and execute them in sequence.
5. Database Transactions: In a database system, you want to encapsulate database operations as commands that can be executed, rolled back, or logged.