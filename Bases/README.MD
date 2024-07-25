# NOTES FOR THIS PART OF BASES

## The "Transpilación"
To create JavaScript files from TypeScript files, use the tsc transpilation like this:
 
```
tsc file.ts
```
## The tsconfig.json
The archive of tsconfig.json that create in root path with this form:
```
tsc --init
```
When the previous file is generated, you only need to run the following command:
```
tsc
```
This will transpile all the .ts files in the root directory.


## Observer Mode

To avoid using the previous tsc commands repeatedly, we can execute the following code in a terminal:
```
tsc --watch
or
tsc -w
```
Now, in this mode, if you save a .ts file, it automatically transpiles the file, regardless of any errors the .ts file might have.
