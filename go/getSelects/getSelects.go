package main

import (
    _ "github.com/go-sql-driver/mysql"
    "database/sql"
)

type Output struct {
    Data []OutputItem `json:"data"`
}
type OutputItem struct {
    Type string `json:"type"`
    Id int `json:"id"`
    Attributes Select `json:"attributes"`
}
type Select struct {
    Name string `json:"name"`
    Options []Option `json:"options"`
}
type Option struct {
    Text string `json:"text"`
    Value string `json:"value"`
    FilterEnable bool `json:"filterEnable"`
    Children []string `json:"children"`
}

func getSelects() Output {
    var output Output
    var item OutputItem
    id := 1
    var prev_name_id string

    // output := {
    //     data: []Select
    // }

    //Create the query.
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
        var name_id string
        var option_text string
        var option_value string

        rows.Scan(&name_id, &option_text, &option_value)    //Assign row data to variables.

        if name_id != prev_name_id {    //If the loop has gotten to a new "select object" (new name_id).
            if len(prev_name_id) > 0 { //Make sure this isn't the first row in the recordset (prev_name_id has a value).
                id++
                output.Data = append(output.Data, item) //Add the current "select object" to the output array.
            }

            item.Type = "fieldChooseSelect"
            item.Id = id
            item.Attributes.Name = name_id    //Assign the "select object" name.
        }

        option := Option{}
        option.Text = option_text  //Assign the 
        option.Value = option_value
        option.FilterEnable = true

        item.Attributes.Options = append(item.Attributes.Options, option)
       

        prev_name_id = name_id
    }


    return output

}

