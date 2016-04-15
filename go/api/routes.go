package main

import "net/http"

type Route struct {
    Name        string
    Method      string
    Pattern     string
    HandlerFunc http.HandlerFunc
}

type Routes []Route

var routes = Routes{
    Route{
        "Index",
        "GET",
        "/",
        Index,
    },
    Route{
        "FieldChooseSelectsGet",
        "GET",
        "/field-choose-selects",
        FieldChooseSelectsGet,
    },
    Route{
        "Foo",
        "GET",
        // "/blah?filter%5Bname%5D={todoId}",
        "/blah",
        Foo,
    },
    Route{
        "FieldFiltersGet",
        "GET",
        "/field-filters",
        FieldFiltersGet,
    },
}