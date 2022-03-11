# repeated-string
There is a string, , of lowercase English letters that is repeated infinitely many times

There is a string **s**, of lowercase English letters that is repeated infinitely many times. Given an integer **n**, find and print the number of letter `a`'s in the first **n** letters of the infinite string.

**Example:**

**s='abcac'**

**n=10**

The substring we consider is **abcacabcac**, the first **10** characters of the infinite string. There are **4** occurrences of `a` in the substring.

**Function Description**

Complete the _repeatedString_ function in the editor below.

repeatedString has the following parameter(s):

*   _s:_ a string to repeat
*   _n:_ the number of characters to consider

**Returns**

*   _int:_ the frequency of `a` in the substring

**Input Format**

The first line contains a single string, **s**.  
The second line contains an integer, **n** .

**Constraints**

*   1≤ |s| ≤ 100
*   1≤ |n| ≤ 1012
*   For **25%** of the test cases, **n≤ 106**.

**Sample Input**

**Sample Input 0**

    aba
    10
    

**Sample Output 0**

    7
    

**Explanation 0**  
The first  **n=10** letters of the infinite string are `abaabaabaa`. Because there are **7** `a`'s, we return **7**.

**Sample Input 1**

    a
    1000000000000
    

**Sample Output 1**

    1000000000000
    

**Explanation 1**  
Because all of the first **n=1000000000000** letters of the infinite string are `a`, we return **1000000000000**.
