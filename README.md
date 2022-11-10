
# Pex challenge

This is the solution for the pex challenge. I reversed the js challenge in couple of hours, then I prepared the AST(Abstract Syntax Tree) transformations with help of Babel in order to reverse the process of obfuscation.
I known the AST transformation can be seen as a litttle bit of overkill in small challenges like this, but the ease of use and final effect of AST transformation proves it quite worthy.
In case of larger files like modern JS challenges it is basically a necessity to use AST transformations in order to reverse engineer it. The solution contains multiple files so here is the brief description of them.

-   challenge.js
    -   original challenge with few commments regarding obfuscation
-   transform.js
    -   the AST transformation that reverses the obfuscation partialy
    -   package[-lock].json are dependencies for the transform.js
-   transformed_challenge.js
    -   the files contains functional mysteryFn with comments that does same thing as original one but is after AST transformation, which makes it more readible
-   main.go
    -   same functionality as mysteryFn but in golang
-   test.sh
    -   bash script for just sane check if random inputs produces same output for my golang solution and challenge

