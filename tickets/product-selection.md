# Task: Product Selection

## Description

Currently the app lists available mortgage products that a user can consider switching to.

- We want a user to be able to select one or multiple products and submit those to their lender.
- Selecting/deselecting a product should be sent to the API to track user behaviour.

## Notes

- Although there's an existing stack, there are no restrictions on bringing in anything you're comfortable using.
- i.e. if you'd prefer to use Context, simply lift state up or bring in Zustand rather than Redux then feel free.

## Within the time allocated

- Please consider the changes to the REST API around these requirements.
- To discuss the API design: list the endpoints and payload/response in comments or update RTKQ in `api.ts` if you are familiar with Redux Toolkit.
- Update or add new components to allow selection. Please review `selected-design.png`.

  ![Selectable Product Design](./selected-design.png 'Selected State')

## Optional

- Connect the app to the API you've designed. Using mocked responses is fine.
- AND/OR Add a confirmation page that lists the selected products before final submission.
