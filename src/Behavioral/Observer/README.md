# Memento
The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects. When one object (the subject) changes state, all its dependents (observers) are notified and updated automatically. This pattern is useful for implementing distributed event-handling systems.

Components of the Observer Pattern
Subject: Maintains a list of observers and provides methods to attach, detach, and notify observers.
Observer: Defines an updating interface for objects that should be notified of changes in a subject.
ConcreteSubject: Stores the state of interest to ConcreteObserver objects and sends notifications to its observers when the state changes.
ConcreteObserver: Implements the updating interface to keep its state consistent with the subject's state.


1. Event Management System: In an event management system, when an event is created or updated, all registered listeners (observers) should be notified.
2. Stock Market Ticker: In a stock market ticker, when the stock price changes, all subscribed investors should be notified.
3. Weather Station. A weather station that notifies various display devices (observers) whenever there is a change in the weather data.
