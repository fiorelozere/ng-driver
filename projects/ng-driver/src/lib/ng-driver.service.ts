import {ElementRef, Inject, Injectable, Provider, TemplateRef, ViewContainerRef} from '@angular/core';
import {Config, driver, Driver, DriveStep, State} from 'driver.js';
import {NG_DRIVER_CONFIG} from './ng-driver-config.token';

/**
 * NgDriver Service
 * A wrapper for the Driver.js library that provides guided tours and feature highlights for Angular applications.
 * This service allows seamless integration of Driver.js with Angular dependency injection system.
 */
@Injectable()
export class NgDriver {
  private driver!: Driver;

  /**
   * Constructor for the NgDriver service.
   * Initializes the service with the provided configuration.
   *
   * @param {Config} config - Configuration options for the Driver.js instance.
   */
  constructor(@Inject(NG_DRIVER_CONFIG) private config: Config) {
    this.initialize(this.config);
  }

  /**
   * Initializes the Driver.js instance with the given configuration.
   *
   * @param {Config} config - Configuration options for Driver.js.
   */
  initialize(config: Config) {
    this.driver = driver(config);
  }

  /**
   * Checks if a tour is currently active.
   *
   * @returns {boolean} - True if a tour is active, false otherwise.
   */
  isActive(): boolean {
    return this.driver.isActive();
  }

  /**
   * Refreshes the Driver.js instance. This is useful if DOM elements have been updated dynamically.
   */
  refresh() {
    this.driver.refresh();
  }

  /**
   * Starts the tour from a specific step index.
   *
   * @param {number} [stepIndex=0] - The index of the step to start from (default is 0).
   */
  drive(stepIndex = 0) {
    this.driver.drive(stepIndex);
  }

  /**
   * Updates the configuration for the Driver.js instance.
   *
   * @param {Config} config - New configuration options for Driver.js.
   */
  setConfig(config: Config) {
    this.driver.setConfig(config);
  }

  /**
   * Defines the steps for the guided tour.
   *
   * @param {DriveStep[]} steps - Array of steps to configure the tour.
   */
  setSteps(steps: DriveStep[]) {
    this.driver.setSteps(steps);
  }

  /**
   * Retrieves a specific configuration value.
   *
   * @template K - The key of the configuration value to retrieve.
   * @param {K} key - The key of the configuration value.
   * @returns {Config[K]} - The value associated with the given key.
   */
  getConfig<K extends keyof Config>(key: K): Config[K] {
    return this.driver.getConfig(key);
  }

  /**
   * Retrieves a specific state value.
   *
   * @template K - The key of the state value to retrieve.
   * @param {K} key - The key of the state value.
   * @returns {State[K]} - The value associated with the given key.
   */
  getState<K extends keyof State>(key: K): State[K] {
    return this.driver.getState(key);
  }

  /**
   * Gets the index of the currently active step.
   *
   * @returns {number | undefined} - The index of the active step or undefined if no step is active.
   */
  getActiveIndex(): number | undefined {
    return this.driver.getActiveIndex();
  }

  /**
   * Checks if the current step is the first step.
   *
   * @returns {boolean} - True if the current step is the first step, false otherwise.
   */
  isFirstStep(): boolean {
    return this.driver.isFirstStep();
  }

  /**
   * Checks if the current step is the last step.
   *
   * @returns {boolean} - True if the current step is the last step, false otherwise.
   */
  isLastStep(): boolean {
    return this.driver.isLastStep();
  }

  /**
   * Retrieves the currently active step.
   *
   * @returns {DriveStep | undefined} - The active step or undefined if no step is active.
   */
  getActiveStep(): DriveStep | undefined {
    return this.driver.getActiveStep();
  }

  /**
   * Retrieves the currently active DOM element.
   *
   * @returns {Element | undefined} - The active DOM element or undefined if no element is active.
   */
  getActiveElement(): Element | undefined {
    return this.driver.getActiveElement();
  }

  /**
   * Retrieves the previously active DOM element.
   *
   * @returns {Element | undefined} - The previous DOM element or undefined if no element was active.
   */
  getPreviousElement(): Element | undefined {
    return this.driver.getPreviousElement();
  }

  /**
   * Retrieves the previously active step.
   *
   * @returns {DriveStep | undefined} - The previous step or undefined if no step was active.
   */
  getPreviousStep(): DriveStep | undefined {
    return this.driver.getPreviousStep();
  }

  /**
   * Moves to the next step in the guided tour.
   */
  moveNext() {
    this.driver.moveNext();
  }

  /**
   * Moves to the previous step in the guided tour.
   */
  movePrevious() {
    this.driver.movePrevious();
  }

  /**
   * Moves to a specific step in the guided tour.
   *
   * @param {number} index - The index of the step to move to.
   */
  moveTo(index: number) {
    this.driver.moveTo(index);
  }

  /**
   * Checks if there is a next step in the guided tour.
   *
   * @returns {false | DriveStep} - The next step or false if there are no more steps.
   */
  hasNextStep(): false | DriveStep {
    return this.driver.hasNextStep();
  }

  /**
   * Checks if there is a previous step in the guided tour.
   *
   * @returns {false | DriveStep} - The previous step or false if there are no previous steps.
   */
  hasPreviousStep(): false | DriveStep {
    return this.driver.hasPreviousStep();
  }

  /**
   * Highlights a specific step in the guided tour.
   *
   * @param {DriveStep} step - The step to highlight.
   */
  highlight(step: DriveStep) {
    this.driver.highlight(step);
  }

  /**
   * Destroys the current guided tour and removes all overlays.
   */
  destroy() {
    this.driver.destroy();
  }
}

/**
 * Provider function for configuring the NgDriver service.
 *
 * @param {Config} config - Configuration options for the Driver.js instance.
 * @returns {Provider} - The provider configuration for Angular's dependency injection.
 */
export const provideNgDriver = (config: Config): Provider => ({
  provide: NgDriver,
  useFactory: () => new NgDriver(config),
});
