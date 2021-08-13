/**
    You are implementing your own HTML editor. 
    To make it more comfortable for developers you would like to add an auto-completion feature to it.

    Given the starting HTML tag, find the appropriate end tag which your editor should propose.

    If you are not familiar with HTML, consult with this note.

    **Example**
    -   For startTag = "<button type='button' disabled>", the output should be
    htmlEndTagByStartTag(startTag) = "</button>";

    -   For startTag = "<i>", the output should be
    htmlEndTagByStartTag(startTag) = "</i>".

    **Hints**
    -   split()
    -   toString()

    **Input/Output**
    - **[execution time limit] 5 seconds (ts)**
    - **[input] string startTag**

        The total number of legs in the house.

    *Guaranteed constraints:*

    3 ≤ startTag.length ≤ 75.
    - **[output] string**
*/

function htmlEndTagByStartTag(startTag) {
  const splitString = startTag.split(' ');
  const splitTag = splitString[0].toString().split('');
  let endTag = '</';

  for (let i = 1; i < splitTag.length; i++) {
    endTag += splitTag[i];    
  }

  endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';

  return endTag;

}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))