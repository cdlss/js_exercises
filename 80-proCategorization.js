/**
    Thumbtack helps Professionals (Pros) grow their business by identifying new customers. 
    Upon registering on Thumbtack, a Pro specifies which categories of services they provide. 
    To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.

**Example**
For pros = ["Jack", "Leon", "Maria"] and

preferences = [["Computer repair", "Handyman", "House cleaning"],
               ["Computer lessons", "Computer repair", "Data recovery service"],
               ["Computer lessons", "House cleaning"]]

               the output should be

proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
                                        [["Computer repair"], ["Jack", "Leon"]],
                                        [["Data recovery service"], ["Leon"]],
                                        [["Handyman"], ["Jack"]],
                                        [["House cleaning"], ["Jack", "Maria"]]]

**Hints**
-   hasOwnProperty()
-   push()
-   toLowerCase()
-   sort()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.string pros**

A sorted non-empty array of unique strings consisting of English letters.

Here and below we assume that strings are sorted lexicographically.

*Guaranteed constraints:*
1 ≤ pros.length ≤ 5,
3 ≤ pros[i].length ≤ 10.

- **[input] array.array.string preferences**

Array of the same length as pros. For each valid i preferences[i] is a sorted array of unique elements, representing the categories the ith Pro provides services in.

*Guaranteed constraints:*
1 ≤ preferences.length ≤ 5,
1 ≤ preferences[i].length ≤ 10,
3 ≤ preferences[i][j].length ≤ 25.

-   **[output] array.array.array.string**
Array of category descriptions sorted by category names. 
Each category should be listed in the following format: 
[[<category>], [<Pro1>, <Pro2>...]] where <category> is a category name, 
and <Proi> is a Pro that provides services in it.

Each category present in preferences should be returned (in the right order),
and Pros in each subarray should be sorted.
*/

function proCategorization(pros, preferences) {
    const prosPreferences = {};
    let proPrefs = [];

    for (let i = 0; i < pros.length; i++) {
        for (let j = 0; j < preferences[i].length; j++) {
            if (prosPreferences.hasOwnProperty(preferences[i][j])) {
                prosPreferences[preferences[i][j]].push(pros[i]);
            } else {
                prosPreferences[preferences[i][j]] = [pros[i]];
            }
            
        }
    }

    for (const prop in prosPreferences) {
        proPrefs.push([[prop], [...prosPreferences[prop]]]);
    }

    proPrefs = proPrefs.sort((pref1, pref2) => {
        const pref1Lower = pref1[0][0].toLowerCase();
        const pref2Lower = pref2[0][0].toLowerCase();

        if (pref1Lower > pref2Lower) {
            return 1;
        }

        if (pref1Lower < pref2Lower) {
            return -1;
        }

        return 0;
    });

    return proPrefs;
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));