import { Component, Host, h } from '@stencil/core';
import Prism from 'prismjs';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.css',
  scoped: true,
})
export class HomePage {

  componentDidRender() {
    Prism.highlightAll();
  }

  render() {
    return (
      <Host style={{maxWidth:'800px', display: 'block'}}>
        <h1>Javascript for C++ Programmers</h1>
        <p>This is specially created for audiences familiar with C++ to quickly get started with JavaScript and start building applications.</p>

        <h4>80-20 rule</h4>
        <p>This tutorial will not cover all JavaScript concepts. I will cover only 20% things which will get 80% of the work done.</p>

        <h4>What can we build with JavaScript?</h4>
        <p>Websites (both frontend and backend), mobile apps, PWAs</p>

        <h4>Hello World Program</h4>
        <js-code code={`console.log('Hello World'); // prints 'Hello World'`} />
        {/* <pre><code class="language-javascript">
          {`console.log('Hello World'); // prints 'Hello World'`}</code></pre> */}

        <p>To run the programs given in this material, open a browser(preferably chrome), press F12, paste the program in under console tab and press Enter</p>
        <p>You should see <code>Hello World</code> output for the above program, you will also see <code>undefined</code>, we will see later what is that.</p>
        <p>In the above program Hello World is a string</p>

        <h4>String in JS</h4>
        <h5>(here on I will use JS for JavaScript)</h5>
        <p>Single quotes or double quotes can be used for strings, like C++ escaping characters like <code>\n \t</code> can be used. Also it supports string concatenation using <code>+</code> sign</p>
        <js-code code={`console.log('Hello' + 'World'); //prints HelloWorld`}></js-code>
        <p>Like C++, in the above program, <code>log</code> is a function. And the <code>console</code> is an object.</p>
      
        <h4>undefined</h4>
        <p>It's a special value in JS, in the program above it's the return value of <code>console.log</code> function, it's like <code>void</code> if we compare it to C++, which means this function is not returning anything.</p>

        <p><b>Semicolons</b> at the end of the line are not necessary, but in some rare cases without semicolons can give unexpected results, so most people use semicolons.</p>

        <h4>Variable Declaration</h4>
        <p>Keywords used for variable declaration are <code>let</code> and <code>const</code> and <code>var</code></p>

        <js-code code={`const num = 2; // declares a variable number with value 2
console.log(number); // prints 2
`}></js-code>
      <p>Similar to C++, <code>const</code> variables cannot be reassigned.</p>
      <js-code code={`num = 3; // will throw error`}></js-code>
      <p>Note that, unlike C++, we do not need to mention data types while declaring variables. JS figures out data type from the assigned value.</p>
      <p>To print types we can use <code>typeof</code> keyword</p>
      <js-code code={`typeof num; // prints 'number'
typeof 'hello'; // prints 'string'
`}></js-code>
<p>We will cover all the data types as we go along.</p>
<p>Note that, unlike C++, there is no <code>int, float, double</code> data types, JS's <code>number</code> data type covers all these 3</p>

<js-code code={`typeof 3.14; // prints 'number'`}></js-code>

<p>Another keyword for variable declaration is <code>let</code>, which can be reassigned</p>
<js-code code={`let name = 'javascript';
console.log(name);	// prints javascript
name = 'c++';		// can be reassigned
console.log(name);	// prints c++`}></js-code>

        <h4>Variable Scope</h4>
        <p>Like C++, scope of variables declared with <code>let</code> and <code>const</code> is within block (yes, javascript having blocks, created using curly braces, {'{}'},  same as C++)</p>
        <p><code>var</code> can also be used for variable declaration, it's like <code>let</code> but having functional scope, instead of block. I will not cover <code>var</code> because everything can be done with <code>let</code> and <code>const</code> alone.</p>

        <h4>Which keyword to use for variable declaration?</h4>
        <p><code>const</code> is preferred whenever it can be used (variable is not reassigned), otherwise <code>let</code>, avoid <code>var</code>.</p>

        <h4>String interpolation</h4>
        <p>Now let's look into what is string interpolation</p>
        <p>Lets try to display variable name with a message</p>
        <js-code code={`const Pi = 3.14;
console.log('Value of Pi is ' + Pi);	// Value of PI is 3.14`}></js-code>
        <p>This works as expected, to make it more readable JS provides string interpolation feature</p>
        <js-code code={`console.log(\`Value of Pi is \${Pi}\`);	// Value of PI is 3.14`}></js-code>
        <p>Note that, we are using backtick(`) not a single quote to use the variable inside the string. </p>
        <p>Variables can be used inside the string using ${'{variableName}'}</p>
        <p>String interpolation has more features but those are rarely needed.</p>
        <p>Also, this is the first time I used camelCase in this material, so make note that camelCase is the convention for identifier names in JS.</p>

        <h4>Operators</h4>
        <p>All arithmetic operators of C++ are available and work in the same way in JS. These are <code>+,-,*,/</code></p>
<p>Other than this JS having <code>**</code> for exponents</p>

        <js-code code={`console.log(2**3);	// 8`}></js-code>
      </Host>
    );
  }

}
