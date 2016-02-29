package main

import (
	_ "fmt"
	"os"
	"encoding/json"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {

	// foo1, foo2 := os.Open("dbtest.go") // For read access.
	// check(err)

	selects := getSelects()
	selectsJSON, err := json.Marshal(selects)
	// index := 0


	// fmt.Println(selects[index].Name)
	// fmt.Println(selects[index].Options)
	// fmt.Println(string(selectsJSON))


	f, err := os.Create("foo.json")
    check(err)

    defer f.Close()


    f.Write(selectsJSON)
}