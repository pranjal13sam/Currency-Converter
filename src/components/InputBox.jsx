import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()
   /*disabled={amountDisable}:
This line sets the disabled attribute of the input field based on the value of the amountDisable prop.
If amountDisable is true, the input field will be disabled, meaning the user cannot interact with it.
If amountDisable is false (or not provided), the input field will be enabled, allowing the user to enter values.
value={amount}:
This line sets the value of the input field to the value provided in the amount prop.
This ensures that the input field displays the correct value according to the amount prop passed to the component.
When the amount prop changes, this input field will reflect the updated value automatically.
onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}:
This line specifies what happens when the user changes the value in the input field.
It calls the onAmountChange function, passing the new value as an argument.
The onChange event handler receives an event object e containing information about the event, including the new value entered by the user (e.target.value).
Number(e.target.value) converts the user input from a string to a number, ensuring consistent data type handling.
The onAmountChange && part is a safety check. It ensures that the onAmountChange function exists before trying to call it. If onAmountChange is not provided as a prop, this expression will short-circuit and prevent an error.
If onAmountChange is provided, it will be called with the new numeric value entered by the user. */

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label} 
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                            /*currencyOptions.map((currency) => (:
This part uses the map() function to iterate over each item in the currencyOptions array.
For each currency in the array, it executes the following code.
<option key={currency} value={currency}>:
Here, it generates an <option> element for each currency in the currencyOptions array.
key={currency}: Each option needs a unique identifier (key) to help React identify which items have changed, been added, or been removed. In this case, currency itself is used as the key.
value={currency}: The value attribute specifies the value that will be sent to the server when the form is submitted. In this case, it's set to the currency, so when the user selects an option, the currency value will be sent.
{currency}:
This is the content of each <option> element.
It displays the currency value itself as the visible text inside the dropdown menu.
So, each option will display the currency code or name, depending on what currency contains. */
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;