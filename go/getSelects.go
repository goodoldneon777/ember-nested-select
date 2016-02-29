package getSelects

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"database/sql"
    // "os"
    // "github.com/ziutek/mymysql/mysql"
    // _ "github.com/ziutek/mymysql/native" // Native engine
    // _ "github.com/ziutek/mymysql/thrsafe" // Thread safe engine
)

type Option struct {
	Text string
	Value string
	Children []string
}
type Select struct {
    Name string
    Options []Option
}


func getSelects() int {
	var output []Select
	var item Select
	var prev_name_id string


	query := `
		SELECT name_id, option_text, option_value
		FROM param_dropdown_option
		ORDER BY name_id asc, order_num asc
	`
	

	db, err := sql.Open("mysql", "root:steel87@/data_chart")
    if err != nil {
	    panic(err.Error()) // Just for example purpose. You should use proper error handling instead of panic
	}


	rows, err := db.Query(query)
    if err != nil {
        panic(err.Error()) // proper error handling instead of panic in your app
    }


	for rows.Next() {
        var name_id string
        var option_text string
        var option_value string

        rows.Scan(&name_id, &option_text, &option_value)

        if name_id != prev_name_id {
        	if len(prev_name_id) > 0 {
        		output = append(output, item)
        	}

        	item.Name = name_id
        	
        }

        option := Option{}
    	option.Text = option_text
    	option.Value = option_value

    	item.Options = append(item.Options, option)
       
        // fmt.Printf("%v \n", name_id)
        prev_name_id = name_id
    }

    fmt.Println(output)
    fmt.Println(output[0].Name)
    fmt.Println(output[0].Options)

	fmt.Println("\n...Done")


	return 1

}

