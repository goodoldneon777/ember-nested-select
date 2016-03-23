/*
This file mimics a database.
*/

package main

import (
    _ "github.com/go-sql-driver/mysql"
    "database/sql"
)

// Give us some seed data
func FieldChooseSelectsBuild() Items {
    var items Items
    var item Item
    var options Options
    var option Option
    var prevNameId string
    var prevOptionValue string
    currentId := 1

    var name_id string      //Clear on each iteration.
    var option_text string  //Clear on each iteration.
    var option_value string //Clear on each iteration.
    var child_name_id string      //Clear on each iteration.


    query := `
        SELECT o.name_id, o.option_text, o.option_value, c.child_name_id
        FROM param_dropdown_option o
        LEFT OUTER JOIN param_input_child c
            ON o.option_value = c.option_value
        WHERE o.name_id like 'C%' and o.name_id != 'category'
        ORDER BY o.name_id asc, o.order_num asc, c.order_num asc
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
        rows.Scan(&name_id, &option_text, &option_value, &child_name_id)    //Assign row data to variables.        


        


        if name_id != prevNameId  &&  len(prevNameId) > 0 {    //If the loop has gotten to a new dropdown (new name_id).
            items = append(items, item) //Add the current item to the output array.

            currentId += 1

            item := Item{}
            _ = item

            options = nil
        } else {
            if option_value != prevOptionValue  &&  len(prevOptionValue) > 0 {    //If the loop has gotten to a new dropdown (new name_id).\
                options = append(options, option)   //Add the current option to the option array.

                option := Option{}
                _ = option
            } else {
                // option.Children = append(option.Children, child_name_id)
            }

        }


        option.Text = option_text
        option.Value = option_value
        option.FilterEnable = true

        item.Id = currentId
        item.Type = "fieldChooseSelect"
        item.Attributes.Name = name_id
        item.Attributes.Options = options

        prevNameId = name_id  //The current name_id will be prevNameId on the next iteration.
        prevOptionValue = option_value
    }


    // item = Item{}
    // item.Id = currentId
    // item.Type = "fieldChooseSelect"
    // item.Attributes.Name = name_id
    items = append(items, item) //Add the current item to the output array.



    return items
}