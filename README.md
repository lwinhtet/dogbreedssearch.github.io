# Dog Breeds Search Assignment

## Introduction

This project, titled "Dog Breeds Search," was developed to fulfill the requirements of a coding assignment. The primary goal was to create a user-friendly web application for searching and displaying dog breeds. The project utilizes various technologies, including React, Redux, RTK-query, Typescript, and Jest for testing.

## Technologies Used

- **Redux**: Used for state management to ensure a smooth and efficient user experience.
- **RTK-query**: Leveraged for fetching and caching data, especially considering the dynamic nature of user inputs.
- **Typescript**: Employed for strong type checking and improved code quality.
- **Jest**: Utilized for testing the application components to ensure reliability and correctness.

## Features

- **Breed Search**: The core functionality allows users to search for dog breeds based on their input.
- **Debounced Input**: Implemented a debouncing mechanism that waits for user typing to pause for 1 second before initiating a data fetch. This enhances performance and reduces unnecessary API calls.
- **Sorting Mechanism**: Provided sorting options for breeds based on attributes such as name, height, and lifespan. Users can choose between ascending and descending order.
- **Styling**: Utilized a single "style.css" file for styling, as the project does not require a complex styling setup.

## Implementation Details

- **Caching with RTK-query**: Given the frequent changes in user input, the decision to use rtx-query was made to benefit from its caching mechanism, which saves caches for different user input searches.
- **Data Fetching and Pagination**: The external API ("/breeds/search?q=poodle") did not support limit/pagination like the "/breeds" endpoint. To ensure consistent fetching and sorting, all breeds were initially fetched based on the user's search. The data was then sorted client-side and presented to the user in chunks of 10 for smooth infinite scrolling.

## Local Storage and Persistence

- **User's Sorting Preference**: The user's desired sorting type is saved in the local storage to maintain their preferred ordering across sessions.
- **Search Input**: While sorting preference is saved, search input is not stored in local storage.

## Loading Indicator

- **Loading Display**: A loading indicator is displayed until images are fully loaded to provide a seamless user experience.

## Testing

- **Comprehensive Testing**: All components have been thoroughly tested to ensure their correctness and reliability.
- **Debounced Input Testing**: Specifically, the debounced input functionality has been tested in "useBreedsData.test.js."

## Learning and Resources

- Given my limited experience with testing, I sought to enhance my skills by studying and incorporating insights from external resources.
- **External Resource**: I found the article "https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/" particularly helpful in gaining insights into writing unit tests in React.
- **ChatGPT Assistance**: To solidify my understanding and overcome challenges, I engaged with ChatGPT for guidance on writing effective tests.

## Conclusion

Developing the "Dog Breeds Search" project was an great experience. The application successfully combines fetching, caching, sorting, and efficient user interaction. Testing all components helped ensure the robustness of the application.
