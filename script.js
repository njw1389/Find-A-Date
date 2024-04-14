document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevents the default context menu from showing
});

// Disable text selection on the entire document
document.onselectstart = function () {
    return false;
};

const questions = [
    {
        prompt: "Are You Looking For A Male Or Female?",
        options: ["Male", "Female"],
        category: "Gender",
        next: [
            { // If "Male" is chosen
                prompt: "Do You Like Freckles?",
                options: ["Yes", "No"],
                category: "Freckles",
                next: [
                    {
                        prompt: "What's Your Prefered Age?", 
                        options: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"],
                        category: "Age",
                        next: [
                            {
                                prompt: "What's Your Ideal Height?",
                                options: ["4'0\"", "4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "4'12\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "5'12\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\"", "7'1\"", "7'2\"", "7'3\"", "7'4\"", "7'5\"", "7'6\"", "7'7\"", "7'8\"", "7'9\"", "7'10\"", "7'11\"", "8'0\"", "8'1\"", "8'2\"", "8'3\"", "8'4\"", "8'5\"", "8'6\"", "8'7\"", "8'8\"", "8'9\"", "8'10\"", "8'11\"", "9'0\"", "9'1\"", "9'2\"", "9'3\"", "9'4\"", "9'5\"", "9'6\"", "9'7\"", "9'8\"", "9'9\"", "9'10\"", "9'11\"", "10'0\""],
                                category: "Height",
                                next: [ 
                                    {
                                        prompt: "Do You Like Facial Hair?",
                                        options: ["Yes", "No"],
                                        category: "Facial Hair",
                                        next: [  
                                            {
                                                prompt: "What's Your Preferred Hair Color?",
                                                options: ["Blonde", "Brown", "Ginger", "Black", "Gray"],
                                                category: "Hair Color",
                                                next: [
                                                    {
                                                        prompt: "What's Your Preferred Eye Color?",
                                                        options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Amber"], 
                                                        category: "Eye Color",
                                                        next: [
                                                            {
                                                                prompt: "What's Your Preferred Build?",
                                                                options: ["Slim", "Athletic", "Muscular", "Curvy", "Average", "A Few Extra Pounds", "Fat"], 
                                                                category: "Build",
                                                                next: [
                                                                    {
                                                                        prompt: "What's Your Prefered Education History?",
                                                                        options: ["High School Drop Out", "High School Student", "High School Graduate", "College Drop Out", "College Student", "College Graduate - Associate", "College Graduate - Bachelor", "College Graduate - Masters", "College Graduate - Doctorate"],
                                                                        category: "Education",
                                                                        next: []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]  
                            } 
                        ]
                    }
                ]
            },
            { // If "Female" is chosen
                prompt: "Do You Like Freckles?",
                options: ["Yes", "No"],
                category: "Freckles",
                next: [
                    { 
                        prompt: "What's Your Prefered Age?", 
                        options: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100"],
                        category: "Age",
                        next: [
                            {
                                prompt: "What's Your Ideal Height?",
                                options: ["4'0\"", "4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"", "4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "4'12\"", "5'0\"", "5'1\"", "5'2\"", "5'3\"", "5'4\"", "5'5\"", "5'6\"", "5'7\"", "5'8\"", "5'9\"", "5'10\"", "5'11\"", "5'12\"", "6'0\"", "6'1\"", "6'2\"", "6'3\"", "6'4\"", "6'5\"", "6'6\"", "6'7\"", "6'8\"", "6'9\"", "6'10\"", "6'11\"", "7'0\"", "7'1\"", "7'2\"", "7'3\"", "7'4\"", "7'5\"", "7'6\"", "7'7\"", "7'8\"", "7'9\"", "7'10\"", "7'11\"", "8'0\"", "8'1\"", "8'2\"", "8'3\"", "8'4\"", "8'5\"", "8'6\"", "8'7\"", "8'8\"", "8'9\"", "8'10\"", "8'11\"", "9'0\"", "9'1\"", "9'2\"", "9'3\"", "9'4\"", "9'5\"", "9'6\"", "9'7\"", "9'8\"", "9'9\"", "9'10\"", "9'11\"", "10'0\""],
                                category: "Height",
                                next: [ 
                                    {
                                        prompt: "What's Your Preferred Hair Color?",
                                        options: ["Blonde", "Brunette", "Red", "Black", "Gray"],
                                        category: "Hair Color",
                                        next: [
                                            {
                                                prompt: "What's Your Preferred Eye Color?",
                                                options: ["Brown", "Blue", "Green", "Hazel", "Gray", "Amber"], 
                                                category: "Eye Color",
                                                next: [
                                                    {
                                                        prompt: "What's Your Preferred Build?",
                                                        options: ["Slim", "Athletic", "Muscular", "Curvy", "Average", "A Few Extra Pounds", "Fat"], 
                                                        category: "Build",
                                                        next: [
                                                            {
                                                                prompt: "What's Your Prefered Education History?",
                                                                options: ["High School Drop Out", "High School Student", "High School Graduate", "College Drop Out", "College Student", "College Graduate - Associate", "College Graduate - Bachelor", "College Graduate - Masters", "College Graduate - Doctorate"],
                                                                category: "Education",
                                                                next: []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function initForm() { // Initialize the form
    const formContainer = document.getElementById('form-container'); // Get the form container

    // Fetch the JSON file
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            loadQuestion(data.questions, formContainer);
        })
        .catch(error => {
            console.error('Error fetching questions - Loaded with the fallback dataset:', error);
            loadQuestion(questions, formContainer);
        }
    );
}

function removeSubsequentQuestions(parentElement, questionDepth) { // Remove subsequent questions
    while (parentElement.children.length > questionDepth) { // Remove all questions after the current depth
        parentElement.removeChild(parentElement.lastChild); // Remove the last question
    } 
}

function createFormContainer() { // Create the form container
    let leftContainer = document.querySelector('.Left'); // Check if the left container already exists
    if (!leftContainer) { // If the left container doesn't exist
        leftContainer = document.createElement('div'); // Create the left container
        leftContainer.className = 'Left'; // Add the 'Left' class
        document.body.appendChild(leftContainer); // Append the left container to the body
    }

    let formContainer = document.getElementById('form-container'); // Check if the form container already exists
    if (!formContainer) { // If the form container doesn't exist
        formContainer = document.createElement('div'); // Create the form container
        formContainer.id = 'form-container'; // Add the 'form-container' id
        leftContainer.appendChild(formContainer); // Append the form container to the left container
    }
}

function createRightContainer() { // Create the right container
    let rightContainer = document.querySelector('.Right'); // Check if the right container already exists
    if (!rightContainer) { // If the right container doesn't exist
        rightContainer = document.createElement('div'); // Create the right container
        rightContainer.className = 'Right'; // Add the 'Right' class
        document.body.appendChild(rightContainer); // Append the right container to the body
    }
    return rightContainer; // Return the right container
}

function createResetButton() { // Create the reset button
    const rightContainer = createRightContainer(); // Create the right container

    // Create a container div for the reset button
    const resetButtonContainer = document.createElement('div'); // Create the reset button container
    resetButtonContainer.id = 'reset-button-container'; // Add the 'reset-button-container' id

    // Create the reset button
    const resetButton = document.createElement('button'); // Create the reset button
    resetButton.id = 'reset-button'; // Add the 'reset-button' id
    resetButton.textContent = 'Reset Everything'; // Set the reset button text
    resetButton.className = 'reset-button'; // Add the 'reset-button' class

    // Append Elements
    resetButtonContainer.appendChild(resetButton); // Append the reset button to the reset button container
    rightContainer.appendChild(resetButtonContainer); // Append the reset button container to the right container

    // Event listener for the reset button
    resetButton.addEventListener('click', function() { // Add event listener to the reset button
        resetFormAndQuestions(); // Reset the form and questions
    });
}

function resetFormAndQuestions() { // Reset the form and questions
    // Clear form fields
    document.getElementById('user-name').value = ''; // Clear the user name field
    document.getElementById('user-email').value = ''; // Clear the user email field
    document.getElementById('user-phone').value = ''; // Clear the user phone field

    // Reset the questionnaire
    const formContainer = document.getElementById('form-container'); // Get the form container
    if (formContainer) { // If the form container exists
        while (formContainer.firstChild) { // While the form container has a first child
            formContainer.removeChild(formContainer.firstChild); // Remove the first child of the form container
        }
    }

    // Reinitialize the questionnaire to its initial state
    initForm(); // Initialize the form
}

function createElementWithClass(elementType, className) { // Create an element with a class
    const element = document.createElement(elementType); // Create the element
    if (className) { // If a class name is provided
        element.className = className; // Add the class name to the element
    }
    return element; // Return the element
}

function createInputField(type, id, name, required = false, labelText = '', validationClass = 'validation-message') { // Create an input field
    const group = createElementWithClass('div', 'form-group'); // Create a div with the 'form-group' class
    const label = createElementWithClass('label'); // Create a label
    label.setAttribute('for', id); // Set the 'for' attribute of the label
    label.textContent = labelText; // Set the text content of the label

    const input = document.createElement('input'); // Create an input
    input.type = type; // Set the type of the input
    input.id = id; // Set the id of the input
    input.name = name; // Set the name of the input
    if (required) input.required = true; // If the input is required, set the 'required' attribute

    const validationMessage = createElementWithClass('div', validationClass); // Create a div with the 'validation-message' class

    group.appendChild(label); // Append the label to the group
    group.appendChild(input); // Append the input to the group
    group.appendChild(validationMessage); // Append the validation message to the group

    return group; // Return the group
}

function setupValidation(userInfoForm, nameInput, emailInput, phoneInput) { // Setup validation
    userInfoForm.addEventListener('submit', function(event) { // Add event listener to the form
        event.preventDefault(); // Prevent the form from submitting
        let validationMessages = []; // Array to hold validation error messages

        // Name validation
        if (!nameInput.value.trim() || !/^[a-zA-Z\s]+$/.test(nameInput.value)) { // If the name is empty or contains non-letter characters
            validationMessages.push('Please enter a valid name (letters only).'); // Add a validation message
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) { // If the email is not in the correct format
            validationMessages.push('Please enter a valid email address.'); // Add a validation message
        }

        // Phone validation
        if (phoneInput.value && !/^\(\d{3}\) \d{3}-\d{4}$/.test(phoneInput.value)) { // If the phone is not in the correct format
            validationMessages.push('Please enter a valid phone number (e.g., (123) 456-7890).'); // Add a validation message
        }

        if (validationMessages.length > 0) { // If there are validation messages
            customAlert(validationMessages, 'error'); // Show the validation messages
        } else { // If there are no validation messages
            const userInfo = { // Create a user info object
                name: nameInput.value, // Set the name property
                email: emailInput.value, // Set the email property
                phone: phoneInput.value, // Set the phone property
            };

            storeUserInfo(userInfo); // Store the user info
            customAlert('Form submitted successfully!', 'success'); // Show a success message
        }
    });
}

function createUserForm() { // Create the user form
    const rightContainer = createRightContainer(); // Create the right container
    let userInfoForm = document.createElement('form'); // Create a form
    userInfoForm.id = 'user-info-form'; // Set the id of the form
    userInfoForm.noValidate = true; // Set the noValidate attribute of the form

    const nameGroup = createInputField('text', 'user-name', 'name', true, 'Name:'); // Create the name input field
    const emailGroup = createInputField('email', 'user-email', 'email', true, 'Email:'); // Create the email input field
    const phoneGroup = createInputField('tel', 'user-phone', 'phone', false, 'Phone (Optional):'); // Create the phone input field

    // Submit button setup
    let submitButton = document.createElement('button'); // Create a button
    submitButton.type = 'submit'; // Set the type of the button
    submitButton.textContent = 'Submit'; // Set the text content of the button

    // Append elements to the form
    [nameGroup, emailGroup, phoneGroup, submitButton].forEach(element => userInfoForm.appendChild(element)); // Append the input fields and the submit button to the form

    // Append form to the Right Div
    rightContainer.appendChild(userInfoForm); // Append the form to the right container

    // Setup the phone input formatter
    setupPhoneInputFormatter(); // Setup the phone input formatter

    // Validation logic
    setupValidation(userInfoForm, nameGroup.querySelector('input'), emailGroup.querySelector('input'), phoneGroup.querySelector('input')); // Setup validation
}

function formatPhoneNumber(value) { // Format the phone number
    // Strip all characters except digits and limit to first 10 digits
    const digits = value.replace(/\D/g, '').substring(0, 10); // Only keep up to 10 digits

    // Format the digits into the desired phone number format (e.g., (123) 456-7890)
    // No extension handling as we're limiting input to 10 digits
    const match = digits.match(/^(\d{1,3})(\d{0,3})(\d{0,4})$/); // Match the digits

    if (match) { // If there's a match
        return `(${match[1]}${match[2] ? ') ' : ''}${match[2]}${match[3] ? '-' : ''}${match[3]}`; // Return the formatted phone number
    }

    return value; // Return the original value if no match
}

function setupPhoneInputFormatter() { // Setup the phone input formatter
    const phoneInput = document.getElementById('user-phone'); // Get the phone input
    if (phoneInput) { // If the phone input exists
        phoneInput.addEventListener('input', function() { // Add event listener to the phone input
            // Replace the input with formatted number, ensuring only numeric input is considered
            this.value = formatPhoneNumber(this.value); // Set the value of the phone input to the formatted phone number
        });

        // Prevent non-numeric input except necessary formatting characters (e.g., parentheses, hyphen, space, and x for extension)
        phoneInput.addEventListener('keypress', function(e) { // Add event listener to the phone input
            if (!/\d|x|\(|\)|\-|\s/.test(e.key) && !['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter', 'Delete'].includes(e.key)) { // If the key is not a digit or a formatting character
                e.preventDefault(); // Prevent the default action
            }
        });
    }
}

function scrollToBottomOfRightContainer() { // Scroll to the bottom of the right container
    const rightContainer = document.querySelector('.Left'); // Get the right container
    if (rightContainer) { // If the right container exists
        if (window.innerWidth < 900) { // For screens less than 900px wide
            // For screens less than 900px wide, scroll to the top of the last question prompt div
            const questionWrappers = rightContainer.querySelectorAll('.question-wrapper'); // Get all question wrappers
            const lastQuestionWrapper = questionWrappers[questionWrappers.length - 1]; // Get the last question wrapper
            if (lastQuestionWrapper) { // If the last question wrapper exists
                lastQuestionWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the last question wrapper
            }
        } else { // For wider screens, maintain the original behavior of scrolling to the bottom
            // For wider screens, maintain the original behavior of scrolling to the bottom
            rightContainer.scrollTop = rightContainer.scrollHeight; // Scroll to the bottom of the right container
        }
    }
}

function scrollToTopOfIdealMatchHeader() { // Scroll to the top of the ideal match header
    const idealMatchHeader = document.querySelector('.ideal-match-header'); // Get the ideal match header
    if (idealMatchHeader) { // If the ideal match header exists
        idealMatchHeader.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the ideal match header
    }
}

function createQuestionWrapper(questionObj) { // Create the question wrapper
    const questionWrapper = document.createElement('div'); // Create a div
    questionWrapper.className = 'question-wrapper'; // Add the 'question-wrapper' class
    const prompt = document.createElement('h4'); // Create an h4 element
    prompt.textContent = questionObj.prompt; // Set the text content of the h4 element
    questionWrapper.appendChild(prompt); // Append the h4 element to the question wrapper
    return questionWrapper; // Return the question wrapper
}

function createSortContainer(userSelections, questionDepth) { // Create the sort container
    const sortContainer = document.createElement('div'); // Create a div
    sortContainer.className = 'sort-container'; // Add the 'sort-container' class

    const sortButton = document.createElement('button'); // Create a button
    sortButton.className = 'sort-btn'; // Add the 'sort-btn' class
    let spanSelected = document.createElement('span'); // Create a span
    spanSelected.className = 'selected'; // Add the 'selected' class
    spanSelected.textContent = userSelections[questionDepth] || 'Select An Option'; // Set the text content of the span
    sortButton.appendChild(spanSelected); // Append the span to the sort button

    let spanTriangle = document.createElement('span'); // Create a span
    spanTriangle.className = 'triangle'; // Add the 'triangle' class
    spanTriangle.textContent = '▼'; // Set the text content of the span
    sortButton.appendChild(spanTriangle); // Append the span to the sort button

    sortContainer.appendChild(sortButton); // Append the sort button to the sort container
    return { sortContainer, sortButton }; // Return the sort container and sort button
}

function addOptionListeners(questionObj, sortOptions, userSelections, parentElement, questionDepth) { // Add option listeners
    questionObj.options.forEach((option, index) => { // Iterate through the question options
        let li = document.createElement('li');  // Create a list item
        li.textContent = option; // Set the text content of the list item
        li.addEventListener('click', function() { // Add event listener to the list item
            userSelections[questionDepth] = option; // Set the user selection
            handleOptionSelection(option, sortOptions, userSelections, parentElement, questionObj, questionDepth, index); // Handle the option selection
        });
        sortOptions.appendChild(li); // Append the list item to the sort options
    });
}

function checkIfShouldScroll(sortButton) {
    // Check if the selected span's text is not 'Select An Option'
    return sortButton.querySelector('.selected').textContent == 'Select An Option';
}

let isAnimating = false; // Flag to indicate if the sort options dropdown is currently animating

function toggleSortOptionsDisplay(sortButton, sortOptions) { // Toggle the sort options dropdown
    sortButton.addEventListener('click', function() { // Add event listener to the sort button
        if (isAnimating) return; // Early exit if already animating

        const isOpening = sortOptions.style.display !== 'block'; // Determine if the dropdown is opening or closing
        const shouldScroll = checkIfShouldScroll(sortButton); // Check if it should scroll

        if (isOpening) { // If the dropdown is opening
            animateOpen(sortOptions, sortButton.querySelector('.triangle'), shouldScroll); // Open the sort options dropdown
            sortButton.classList.add('open'); // Add the 'open' class to show the border
        } else { // If the dropdown is closing
            animateClose(sortOptions, sortButton.querySelector('.triangle'), sortButton); // Close the sort options dropdown
        }
    });
}

function animateOpen(sortOptions, triangle, shouldScroll) { // Open the sort options dropdown
    if (isAnimating) return; // Early exit if already animating
    isAnimating = true; // Set flag to indicate animation has started

    let startHeight = 0; // Start with 0 height
    let endHeight = calculateSortOptionsHeight(sortOptions); // Calculate the height of the sort options
    let startRotation = 0; // Start with 0 rotation
    let endRotation = 180; // Rotate 180 degrees
    let startTime = null; // Initialize the start time

    function step(timestamp) { // Animation function
        if (!startTime) startTime = timestamp; // Initialize the start time
        const progress = Math.min((timestamp - startTime) / 300, 1); // Animation duration 300ms

        sortOptions.style.display = 'block'; // Ensure the sort options are visible during animation
        sortOptions.style.height = `${startHeight + progress * (endHeight - startHeight)}px`; // Animate the height
        triangle.style.transform = `rotate(${startRotation + progress * (endRotation - startRotation)}deg)`; // Animate the rotation

        if (progress < 1) { // Continue the animation if not yet complete
            requestAnimationFrame(step); // Continue the animation
        } else { // Reset the flag and styles once animation is complete
            sortOptions.style.height = ''; // Reset height
            isAnimating = false; // Reset flag once animation is complete
            if (shouldScroll) { // Only scroll if shouldScroll is true
                scrollToBottomOfRightContainer();
            }
        }
    }

    requestAnimationFrame(step); // Start the animation
}

function animateClose(sortOptions, triangle, sortButton) { // Close the sort options dropdown
    if (isAnimating) return; // Early exit if already animating
    isAnimating = true; // Set flag to indicate animation has started

    let startHeight = sortOptions.offsetHeight; // Start with the current height
    let endHeight = 0; // End with 0 height
    let startRotation = 180; // Start with 180 degree rotation
    let endRotation = 0; // Rotate back to 0 degrees
    let startTime = null; // Initialize the start time

    function step(timestamp) { // Animation function
        if (!startTime) startTime = timestamp; // Initialize the start time
        const progress = Math.min((timestamp - startTime) / 300, 1); // Animation duration 300ms

        sortOptions.style.height = `${startHeight - progress * (startHeight - endHeight)}px`; // Animate the height
        triangle.style.transform = `rotate(${startRotation + progress * (endRotation - startRotation)}deg)`; // Animate the rotation

        if (progress < 1) { // Continue the animation if not yet complete
            requestAnimationFrame(step); // Continue the animation
        } else { // Reset the flag and styles once animation is complete
            sortOptions.style.display = 'none'; // Hide the sort options
            sortOptions.style.height = ''; // Reset height
            triangle.style.transform = ''; // Reset triangle rotation
            isAnimating = false; // Reset flag once animation is complete
            sortButton.classList.remove('open'); // Remove the 'open' class to hide the border
        }        
    }

    requestAnimationFrame(step); // Start the animation
}

function calculateSortOptionsHeight(sortOptions) { // Calculate the height of the sort options
    sortOptions.style.visibility = 'hidden'; // Hide the sort options
    sortOptions.style.display = 'block'; // Display the sort options
    const height = sortOptions.offsetHeight; // Get the height of the sort options
    sortOptions.style.display = 'none'; // Hide the sort options
    sortOptions.style.visibility = ''; // Show the sort options
    return height; // Return the height of the sort options
}

function handleOptionSelection(selectedOption, sortOptions, userSelections, parentElement, questionObj, questionDepth, index) { // Handle the option selection
    const spanSelected = sortOptions.previousSibling.querySelector('.selected'); // Get the selected span 
    spanSelected.textContent = selectedOption; // Set the selected option text
    sortOptions.style.display = 'none'; // Hide the sort options
    const sortButton = sortOptions.previousSibling; // Get the sort button related to the sort options
    sortButton.classList.remove('open'); // Remove the 'open' class to hide the border
    sortButton.querySelector('.triangle').style.transform = 'rotate(0deg)'; // Reset the triangle rotation
    updateSelectedOptions(userSelections, parentElement); // Update the selected options

    // Determine the next question to load based on the current depth in the questionnaire and the user's selection.
    // If we are at the top level (questionDepth === 0), we select the next question based on the user's selection (index).
    // For nested questions (questionDepth > 0), we proceed directly to the next set of questions without using an index.
    let nextQuestion = questionDepth === 0 ? questionObj.next[index] : questionObj.next; // Determine the next question to load

    if (nextQuestion) { // If there is a next question
        loadQuestion(nextQuestion.next || nextQuestion, parentElement, userSelections, questionDepth + 1); // Load the next question
    } else { // If there is no next question
        displayUserSelections(userSelections, parentElement); // Display the user selections
    }
}

function loadQuestion(questionData, parentElement, userSelections = [], questionDepth = 0) { // Load the question
    if (!questionData || questionData.length === 0) { // If no question data
        displayUserSelections(userSelections, parentElement); // Display the user selections
        return; // Exit if no question data
    }

    const questionObj = questionData instanceof Array ? questionData[0] : questionData; // Get the question object
    removeSubsequentQuestions(parentElement, questionDepth); // Remove subsequent questions
    userSelections.splice(questionDepth, userSelections.length - questionDepth); // Remove any user selections beyond the current depth

    const questionWrapper = createQuestionWrapper(questionObj); // Create the question wrapper
    const { sortContainer, sortButton } = createSortContainer(userSelections, questionDepth); // Create the sort container and sort button

    const sortOptions = document.createElement('ul'); // Create a ul element
    sortOptions.className = 'sort-options'; // Add the 'sort-options' class
    addOptionListeners(questionObj, sortOptions, userSelections, parentElement, questionDepth); // Add event listeners to the options
    toggleSortOptionsDisplay(sortButton, sortOptions); // Add event listener to the sort button

    sortContainer.appendChild(sortOptions); // Append the sort options to the sort container
    questionWrapper.appendChild(sortContainer); // Append the sort container to the question wrapper
    parentElement.appendChild(questionWrapper); // Append the question wrapper to the parent element
    scrollToBottomOfRightContainer(); // Scroll the right container to the bottom
}

function updateSelectedOptions(userSelections, parentElement) { // Update the selected options
    const questionWrappers = parentElement.querySelectorAll('.question-wrapper'); // Get all question wrappers
    questionWrappers.forEach((wrapper, questionIndex) => { // Iterate through the question wrappers
        // For each question wrapper, find its sort-options list
        const sortOptionsList = wrapper.querySelector('.sort-options'); // Get the sort options list
        if (sortOptionsList) { // If the sort options list exists
            const listItems = sortOptionsList.querySelectorAll('li'); // Get all list items in the sort options list
            listItems.forEach((li) => { // Iterate through the list items
                li.classList.remove('selected-option'); // Remove the 'selected-option' class
                // Apply the selected-option class only to the list item that matches the user selection for this question
                const selectedOptionForQuestion = userSelections[questionIndex]; // Get the user selection for this question
                if (li.textContent === selectedOptionForQuestion) { // If the list item matches the user selection
                    li.classList.add('selected-option'); // Add the 'selected-option' class
                }
            });
        }
    });
}

const maleNames = [ // Array of Male Names
    "James", "John", "Robert", "Michael", "William",
    "David", "Richard", "Joseph", "Charles", "Thomas",
    "Christopher", "Daniel", "Matthew", "Anthony", "Mark",
    "Donald", "Steven", "Paul", "Andrew", "Joshua",
    "Kenneth", "Kevin", "Brian", "George", "Edward"
]; const femaleNames = [ // Array of Female Names
    "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth",
    "Barbara", "Susan", "Jessica", "Sarah", "Karen",
    "Nancy", "Lisa", "Margaret", "Betty", "Sandra",
    "Ashley", "Dorothy", "Kimberly", "Emily", "Donna",
    "Michelle", "Carol", "Amanda", "Melissa", "Deborah"
];

function displayUserSelections(selections, parentElement) { // Display the user selections
    // Clear any existing results before displaying new ones
    const existingResults = parentElement.querySelectorAll('.user-selections, .profile-container, .ideal-match-header'); // Get existing results
    existingResults.forEach(result => parentElement.removeChild(result)); // Remove existing results

    // Create header and profile container
    const idealMatchHeader = createIdealMatchHeader(); // Create the ideal match header
    const profileContainer = createProfileContainer(); // Create the profile container
    const imageWrapper = createImageWrapper(); // Create the image wrapper

    // Append elements
    parentElement.appendChild(idealMatchHeader); // Append the ideal match header to the parent element
    imageWrapper.appendChild(createProfileImage()); // Placeholder for profile image creation
    profileContainer.appendChild(imageWrapper); // Append the image wrapper to the profile container

    const genderSelection = selections[0]; // Gender selection is the first in the array

    const randomName = genderSelection === "Male" ? selectRandomName(maleNames) : selectRandomName(femaleNames); // Determine the random name based on gender selection
    
    addParagraph(profileContainer, '', `${randomName}`, `name-Attribute`); // Display the randomly selected name without 'Name:' prefix

    addParagraph(profileContainer, 'Gender', `${genderSelection}`); // Add the gender to its own div

    // Process and display the rest of the selections
    let questionPath = questions[0].next[genderSelection === "Male" ? 0 : 1].next; // Adjusted to select correct path based on gender
    selections.forEach((selection, index) => { // Iterate through the selections
        if (index > 0) { // Skip the first selection (gender) since it's already processed
            const {category, nextPath} = findCategoryAndNextPath(questionPath, selection); // Find the category and next path based on the user's selection
            addParagraph(profileContainer, category, selection); // Add the paragraph to the profile container
            if (nextPath) questionPath = nextPath.next || nextPath; // Update path for next iteration, adjust for structure
        }
    });

    // Append profile container to the parent element
    parentElement.appendChild(profileContainer); // Append the profile container to the parent element
    scrollToTopOfIdealMatchHeader(); // Scroll to the top of the ideal match header
}

function findCategoryAndNextPath(questionPath, selection) { // Find the category and next path based on the user's selection
    for (let i = 0; i < questionPath.length; i++) { // Iterate through the question path
        let question = questionPath[i]; // Get the current question
        if (question.options && question.options.includes(selection)) { // If the selection is found in the question options
            return { // Return the category and next path
                category: question.category, // Set the category
                nextPath: question.next // Set the next path
            };
        }
    }
    return { category: "Unknown", nextPath: null }; // Return unknown category and next path
}

function addParagraph(parent, category, selection, className = ``) { // Add a paragraph to the parent element
    const container = document.createElement('div'); // Create a div
    container.className = 'profile-attribute'; // Add the 'profile-attribute' class

    if (category) { // If a category is provided
        const categoryParagraph = document.createElement('p'); // Create a paragraph
        categoryParagraph.textContent = category + ":"; // Set the text content
        container.appendChild(categoryParagraph); // Append the paragraph to the container
    }

    const selectionParagraph = document.createElement('p'); // Create a paragraph
    selectionParagraph.textContent = selection; // Set the text content
    if (className !== ``) { // If a class name is provided
        selectionParagraph.className = className; // Add the class name
    }
    container.appendChild(selectionParagraph); // Append the paragraph to the container

    parent.appendChild(container); // Append the container to the parent
}

function selectRandomName(namesArray) { // Select a random name from the provided array
    return namesArray[Math.floor(Math.random() * namesArray.length)]; // Return a random name
}

function createIdealMatchHeader() { // Placeholder for ideal match header creation
    // Implementation for creating the header
    const header = document.createElement('h1'); // Create an h1 element
    header.className = 'ideal-match-header'; // Add the 'ideal-match-header' class
    header.textContent = 'Your Ideal Match'; // Set the text content
    return header; // Return the header
}

function createProfileContainer() { // Placeholder for profile container creation
    // Implementation for creating the profile container
    const container = document.createElement('div'); // Create a div
    container.className = 'profile-container'; // Add the 'profile-container' class
    return container; // Return the container
}

function createImageWrapper() { // Placeholder for image wrapper creation
    // Implementation for creating the image wrapper
    const wrapper = document.createElement('div'); // Create a div
    wrapper.className = 'image-wrapper'; // Add the 'image-wrapper' class
    return wrapper; // Return the wrapper
}

function createProfileImage() { // Placeholder for profile image creation
    // Implementation for creating the profile image
    const image = document.createElement('img'); // Create an image element
    image.src = 'image.jpg'; // Placeholder image source
    image.alt = 'Ideal Match Profile'; // Add alt text
    image.className = 'profile-image'; // Add the 'profile-image' class
    return image; // Return the image
}

function storeUserInfo(userInfo) {
    try {
        if (navigator.cookieEnabled && canAccessCookies()) {
            // Attempt to store information in cookies
            document.cookie = `name=${encodeURIComponent(userInfo.name)};path=/;max-age=31536000`; // 1 year
            document.cookie = `email=${encodeURIComponent(userInfo.email)};path=/;max-age=31536000`; // 1 year
            document.cookie = `phone=${encodeURIComponent(userInfo.phone)};path=/;max-age=31536000`; // 1 year
            console.log("User info stored in cookies.");
        } else if (typeof(Storage) !== "undefined") {
            // Fallback to localStorage if cookies are not enabled or accessible
            localStorage.setItem('name', userInfo.name);
            localStorage.setItem('email', userInfo.email);
            localStorage.setItem('phone', userInfo.phone);
            console.log("User info stored in localStorage.");
        } else if (typeof(sessionStorage) !== "undefined") {
            // Further fallback to sessionStorage if localStorage is also not accessible
            sessionStorage.setItem('name', userInfo.name);
            sessionStorage.setItem('email', userInfo.email);
            sessionStorage.setItem('phone', userInfo.phone);
            console.log("User info stored in sessionStorage.");
        } else {
            // If cookies, localStorage, and sessionStorage are unavailable, log an error or handle accordingly
            console.error("Web storage options are unavailable. Unable to store user info.");
            window.location.href = "https://www.google.com/chrome/";
        }
    } catch (error) {
        console.error("Error storing user info:", error);
    }
}

function populateFormWithSavedInfo() {
    let userInfo = {
        name: getCookie('name') || localStorage.getItem('name') || sessionStorage.getItem('name'),
        email: getCookie('email') || localStorage.getItem('email') || sessionStorage.getItem('email'),
        phone: getCookie('phone') || localStorage.getItem('phone') || sessionStorage.getItem('phone')
    };

    if (userInfo.name || userInfo.email || userInfo.phone) {
        document.getElementById('user-name').value = userInfo.name || '';
        document.getElementById('user-email').value = userInfo.email || '';
        document.getElementById('user-phone').value = userInfo.phone || '';
        console.log("Form populated with saved info.");
    } else {
        console.log("No user info found to populate the form.");
    }
}

function getCookie(name) { // Get a cookie by name
    let cookieArray = document.cookie.split(';'); // Split the cookie string into an array
    for(let i = 0; i < cookieArray.length; i++) { // Loop through the cookie array
        let cookiePair = cookieArray[i].split('='); // Split each cookie into a key-value pair
        if(name == cookiePair[0].trim()) { // If the name matches the key
            return decodeURIComponent(cookiePair[1]); // Return the value
        }
    }
    return null; // If the cookie is not found, return null
}

function canAccessCookies() {
    try {
        // Attempt to use cookies
        document.cookie = "testcookie=1; SameSite=Lax;";
        const success = document.cookie.indexOf("testcookie=") !== -1;
        // Clean up test cookie
        document.cookie = "testcookie=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax;";
        return success;
    } catch (e) {
        return false;
    }
}

function customAlert(messages, type = 'success') {
    const userInfoForm = document.getElementById('user-info-form'); // Get the user info form
    if (!userInfoForm) return; // If the user info form does not exist, exit the function

    // Remove existing alerts
    const existingAlerts = userInfoForm.querySelectorAll('.custom-alert'); // Get existing alerts
    existingAlerts.forEach(alert => alert.remove()); // Remove existing alerts

    // Create alert container
    const alertDiv = document.createElement('div'); // Create a div
    alertDiv.className = `custom-alert ${type}`; // Add the 'custom-alert' and type class

    // Check if messages is an array and create a paragraph for each message
    if (Array.isArray(messages)) { // If messages is an array
        messages.forEach(message => { // Iterate through the messages
            const messageParagraph = document.createElement('p'); // Create a paragraph
            messageParagraph.textContent = message; // Set the text content using textContent
            messageParagraph.style.margin = '5px 0'; // Add some margin
            alertDiv.appendChild(messageParagraph); // Append the message paragraph to the alert div
        });
    } else { // If messages is not an array
        const singleMessageParagraph = document.createElement('p'); // Create a paragraph
        singleMessageParagraph.textContent = messages; // Set the text content using textContent
        alertDiv.appendChild(singleMessageParagraph); // Append the message paragraph to the alert div
    }

    userInfoForm.appendChild(alertDiv); // Append the alert div to the user info form
    alertDiv.style.opacity = 1; // Set the initial opacity to 1

    // Determine the length of the alert message for deciding the timeout duration
    const messageLength = alertDiv.textContent.length; // Get the length of the alert message using textContent
    const timeoutDuration = messageLength > 35 ? 6000 : 3000; // Longer messages get a longer timeout

    setTimeout(() => fadeOut(alertDiv), timeoutDuration); // Fade out the alert after a certain duration
}

function fadeOut(element) { // Fade out an element
    let opacity = 1; // Initial opacity
    function decreaseOpacity() { // Animation function
        opacity -= 0.05; // Decrease the opacity by 5% each frame
        if (opacity <= 0) { // If the opacity is 0 or less
            opacity = 0; // Ensure the opacity doesn't go into negative values
            element.style.opacity = opacity; // Set the opacity to 0
            element.remove(); // Remove the element once fully transparent
        } else { // If the opacity is not 0 yet
            element.style.opacity = opacity; // Set the opacity to the current value
            requestAnimationFrame(decreaseOpacity); // Continue the animation
        }
    }
    requestAnimationFrame(decreaseOpacity); // Start the animation
}

function checkBrowserCompatibility() { // Check for browser compatibility
    if (typeof(Storage) !== "undefined") { // If localStorage is supported
        console.log("This browser supports localStorage."); // Log a message to the console
    } else { // If localStorage is not supported
        console.log("This browser does not support localStorage."); // Log a message to the console
        window.location.href = "https://www.google.com/chrome/"; // Redirect the user to the Chrome download page
    }
}
  
function main() { // Main function
    checkBrowserCompatibility(); // Check for browser compatibility
    createFormContainer(); // Create the form container
    createUserForm(); // Create the user form
    initForm(); // Initialize the form
    populateFormWithSavedInfo(); // Populate the form with saved info
    createResetButton(); // Create the reset button
}

document.addEventListener('DOMContentLoaded', main); // Run the main function when the DOM is fully loaded