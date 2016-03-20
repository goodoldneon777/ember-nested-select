/*
This file mimics a database.
*/

package main

import (
    _ "github.com/go-sql-driver/mysql"
    "database/sql"
)

var currentId int

var items Items

// Give us some seed data
func init() {
    var item Item
    var prev_name_id string


    query := `
        SELECT name_id, option_text, option_value
        FROM param_dropdown_option
        ORDER BY name_id asc, order_num asc
    `
    
    //Connect to the data_chart database.
    db, err := sql.Open("mysql", "root:steel87@/data_chart")
    if err != nil {
        panic(err.Error()) // Just for example purpose. You should use proper error handling instead of panic
    }

    //Run the query.
    rows, err := db.Query(query)
    if err != nil {
        panic(err.Error()) // proper error handling instead of panic in your app
    }

    //Loop thru the query recordset.
    for rows.Next() {
        var name_id string      //Clear on each iteration.
        var option_text string  //Clear on each iteration.
        var option_value string //Clear on each iteration.

        rows.Scan(&name_id, &option_text, &option_value)    //Assign row data to variables.

        if name_id != prev_name_id {    //If the loop has gotten to a new dropdown (new name_id).
            if len(prev_name_id) > 0 { //Make sure this isn't the first row in the recordset (prev_name_id has a value).
                RepoCreateItem(item)    //Add the current item to the output array.
            }

            item.Type = "fieldChooseSelect"
            item.Attributes.Name = name_id
        }

        option := Option{}
        option.Text = option_text
        option.Value = option_value
        option.FilterEnable = true

        item.Attributes.Options = append(item.Attributes.Options, option)   //Add the current option to the option array.
        
        prev_name_id = name_id  //The current name_id will be prev_name_id on the next iteration.
    }
}


func RepoFindItem(id int) Item {
    for _, t := range items {
        if t.Id == id {
            return t
        }
    }
    // return empty Item if not found
    return Item{}
}


func RepoCreateItem(t Item) Item {
    //Any created entities are lost when the server is restarted.
    currentId += 1
    t.Id = currentId
    items = append(items, t)
    return t
}