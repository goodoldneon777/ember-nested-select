package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    // "strings"
    // "github.com/gorilla/mux"
)

func Index(w http.ResponseWriter, r *http.Request) {
     http.ServeFile(w, r, "index.html")
}

func FieldChooseSelectsGet(w http.ResponseWriter, r *http.Request) {
    filterName := r.URL.Query().Get("filter[name]")

    items := FieldChooseSelectsBuild(filterName)
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")   //Explicitly set the content type of the response. Go can implicitly guess it, but it isn't always accurate.
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.WriteHeader(http.StatusOK)    //Explicitly set the status code of the response.
    if err := json.NewEncoder(w).Encode(items); err != nil {
        panic(err)
    }
}

func FieldFiltersGet(w http.ResponseWriter, r *http.Request) {
    // var item Items

    items := FieldFiltersBuild()
    w.Header().Set("Content-Type", "application/json; charset=UTF-8")   //Explicitly set the content type of the response. Go can implicitly guess it, but it isn't always accurate.
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.WriteHeader(http.StatusOK)    //Explicitly set the status code of the response.
    if err := json.NewEncoder(w).Encode(items); err != nil {
        panic(err)
    }

    // if err := json.NewEncoder(w).Encode(w.Header()); err != nil {
    //     panic(err)
    // }
}

func Foo(w http.ResponseWriter, r *http.Request) {
    filterName := r.URL.Query().Get("filter[name]")
    // fmt.Fprintln(w, "Todo show:", name)

    if (filterName == "") {
        fmt.Fprintln(w, "Todo show:", "foo")
    } else {
        fmt.Fprintln(w, "Todo show:", filterName)
    }
    
}