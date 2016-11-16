# Flux
* Its an application architecture for build client-side web application.
* Flux has a unidirectional data flow.
* Developed by Facebook
* Has 3 major parts
  1. The Dispatcher
  2. The Stores
  3. The Views (React Components)

## Notes
* Flux should not be confused with MVC.
* Controller do exist in Flux application, but they are Controller-views

### A single Dispatcher
* A central hub that manages all data flow in a Flux application.
* A registry of callbacks into the stores and has no real intelligence of its own.
* A mechanism for distributing the actions to the stores.
* Each store registers itself and provides a callback.
* When an action creator provides the dispatcher with a new action, all stores in the application receive the action via the callbacks in the registry.
* It can be used to manage dependencies between the stores by invoking the registered callbacks in a specific order.
* Stores can declaratively wait for other stores to finish updating, and then update themselves accordingly.

### Stores
* Contain the application state and logic.
* Their role is somewhat similar to a model in a traditional MVC, but they manage the state of many objects
* A store registers itself with the dispatcher and provides it with a callback.
* Within the store's registered callback, a switch statement based on the action's type is used to interpret the action and to provide the proper hooks into the store's internal methods. This allows an action to result in an update to the state of the store, via the dispatcher.
* After the stores are updated, they broadcast an event declaring that their state has changed, so the views may query the new state and update themselves.

### View and Controller-views
* Close to the top of the nested view hierarchy, a special kind of view listens for events that are broadcast by the stores that it depends on. This is a controller-view, as it provides the glue code to get the data from the stores and to pass this data down the chain of its descendants.
* When it receives the event from the store, it first requests the new data it needs via the stores' public getter methods. It then calls its own setState() or forceUpdate() methods, causing its render() method and the render() method of all its descendants to run.
* We often pass the entire state of the store down the chain of views in a single object, allowing different descendants to use what they need.

### Actions
* The dispatcher exposes a method that allows us to trigger a dispatch to the stores, and to include a payload of data, which we call an action.
