
# **ng-driver**

An Angular wrapper for [Driver.js](https://github.com/kamranahmedse/driver.js), `ng-driver` makes it easy to integrate guided tours and feature highlights into Angular applications. This library provides an Angular-friendly interface to the Driver.js library.
This library its still on early development and its not suggested to be used on production yet.

---

## **Installation**

Install the library and its dependency:

```bash
npm install ng-driver
```

---

## **Usage**

### **1. Import `NgDriver` Service**

In your Angular application, inject the `NgDriver` service into your components or services.

#### Example:

```typescript

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  templateUrl: `
    <div class="tour-container">
          <h1>Ng-Driver Demo</h1>
          <button (click)="startTour()">Start Tour</button>
          <div id="step1">This is Step 1: Welcome!</div>
          <div id="step2">Step 2: Learn more about ngx-driver.</div>
          <div id="step3">Step 3: You're ready to go!</div>
    </div>
  `,
  providers: [
    provideNgDriver({ animate: true }) ]
})
export class AppComponent {
  ngDriver = inject(NgDriver)

  steps = [
    { element: '#step1', popover: { title: 'Step 1', description: 'This is Step 1' } },
    { element: '#step2', popover: { title: 'Step 2', description: 'This is Step 2' } },
    { element: '#step3', popover: { title: 'Step 3', description: 'This is Step 3' } },
  ]

  startTour() {
    this.ngDriver.setSteps(this.steps);
    this.ngDriver.drive()
  }
}
```

---

### **2. Provide Configuration**

You can provide `NgDriver` by using `provideNgDriver` in your component or module:

#### Example:

```typescript
@Component ({
  providers: [
    provideNgDriver({
      animate: true,
      opacity: 0.75,
    }),
  ],
})
export class AppComponent {}
```

---

## **Methods**

### Core Methods

| **Method**         | **Description**                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------|
| `initialize(config)`| Initializes the Driver.js instance with a given configuration.                                    |
| `setSteps(steps)`   | Defines the steps for the guided tour.                                                            |
| `drive(index?)`     | Starts the tour, optionally from a specific step index.                                           |
| `highlight(step)`   | Highlights a specific step in the tour.                                                          |
| `refresh()`         | Refreshes the DOM state for Driver.js (useful if elements are dynamically updated).               |
| `destroy()`         | Destroys the Driver.js instance, removing overlays and resetting the state.                       |

### Query and State Methods

| **Method**          | **Description**                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------------|
| `isActive()`         | Checks if a tour is currently active.                                                            |
| `getActiveStep()`    | Retrieves the currently active step.                                                             |
| `getActiveElement()` | Retrieves the currently highlighted DOM element.                                                 |
| `moveNext()`         | Moves to the next step in the tour.                                                              |
| `movePrevious()`     | Moves to the previous step in the tour.                                                          |

---

## **Configuration**

`ng-driver` accepts the same configuration options as Driver.js. Example:

```typescript
provideNgDriver({
  animate: true, // Animate step transitions
  opacity: 0.75, // Background opacity
  keyboardControl: true, // Enable keyboard navigation
  overlayClickNext: true, // Click on overlay to go to the next step
});
```

For a full list of configuration options, refer to the [Driver.js documentation](https://github.com/kamranahmedse/driver.js).

---

## **Contributing**

Contributions are welcome! To report bugs or request features, please open an issue on the GitHub repository:

👉 [https://github.com/fiorelozere/ng-driver](https://github.com/fiorelozere/ng-driver)

---

## **License**

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
