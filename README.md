# HTMLComponents-Spinner
<table>
            <thead>
                <tr>
                    <th>Attribute</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Optional</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>initialValue</td>
                    <td>The initial value of the component.</td>
                    <td>Number</td>
                    <td>0</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>
                        Sets the lower bound of the interval of possible values. 
                        If `min` is greater than `initialValue` or the default `initialValue`, the initial value is set to `min`.
                    </td>
                    <td>Number</td>
                    <td>Negative Infinity</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>
                        Sets the upper bound of the interval of possible values. 
                        If `max` is less than `initialValue` or the default `initialValue`, the initial value is set to `max`.
                    </td>
                    <td>Number</td>
                    <td>Positive Infinity</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>step</td>
                    <td>Sets the step with which to increase/decrease the value on change</td>
                    <td>Number</td>
                    <td>1</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>Sets an onChange event handler to be fired when the value is changed</td>
                    <td>Function</td>
                    <td>??</td>
                    <td>Not Implemented</td>
                </tr>
                <tr>
                    <td>onUp</td>
                    <td>Sets an onUp event handler to be fired when the value is increased</td>
                    <td>Function</td>
                    <td>??</td>
                    <td>Not Implemented</td>
                </tr>
                <tr>
                    <td>onDown</td>
                    <td>Sets an onDown event handler to be fired when the value is decreased</td>
                    <td>Function</td>
                    <td>??</td>
                    <td>Not Implemented</td>
                </tr>
                <tr>
                    <td>renderer</td>
                    <td>Sets a function that returns a string to be represented in the UI. Gets passed the current value as an argument.</td>
                    <td>Function</td>
                    <td>??</td>
                    <td>Not Implemented</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>An object with CSS properties that's used to style the component.</td>
                    <td>object</td>
                    <td>??</td>
                    <td>Not Implemented</td>
                </tr>
                <tr>
                    <td>upBtnText</td>
                    <td>Text content of the increase button.</td>
                    <td>string</td>
                    <td>'+'</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>downBtnText</td>
                    <td>Text content of the decrease button.</td>
                    <td>string</td>
                    <td>'-'</td>
                    <td>Yes</td>
                </tr>
            </tbody>
        </table>

<h1>Usage</h1>

```html
<msh-spinner initialValue="21"></msh-spinner>

<msh-spinner min="4" max="10" initialValue="6"></msh-spinner>

<msh-spinner upBtnText="increase" downBtnText="decrease"></msh-spinner>

<msh-spinner initialValue="5" step="0.3"></msh-spinner>
```
