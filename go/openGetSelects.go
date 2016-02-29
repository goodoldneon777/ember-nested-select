package main

import (
	"./getSelects.go"
	"fmt"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {

	// foo1, foo2 := os.Open("dbtest.go") // For read access.
	// check(err)

	foo1 := getSelects()

	fmt.Println(foo1)
}