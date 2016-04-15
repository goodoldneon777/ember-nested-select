package main

// import "time"

// type Dropdown struct {
//     Id        int       `json:"id"`
//     Name      string    `json:"name"`
//     Completed bool      `json:"completed"`
//     Due       time.Time `json:"due"`
// }

// type Dropdowns []Dropdown

type Item struct {
    Type string `json:"type"`
    Id int `json:"id"`
    Attributes Dropdown `json:"attributes"`
}

type Dropdown struct {
    Name 	string 		`json:"name"`
    Options []Option 	`json:"options"`
}

type Option struct {
    Text string `json:"text"`
    Value string `json:"value"`
    FilterEnable bool `json:"filterEnable"`
    Children []string `json:"children"`
}

type Items []Item

type Options []Option

type OutputJSON struct {
	Data Items `json:"data"`
}



type FieldFilterOutputJSON struct {
    Data []FieldFilter `json:"data"`
}

type FieldFilter struct {
    Type string `json:"type"`
    Id int `json:"id"`
    Attributes FieldFilterDropdown `json:"attributes"`
}

type FieldFilterDropdown struct {
    Name    string      `json:"name"`
    Options []FieldFilterDropdownOption    `json:"options"`
}

type FieldFilterDropdownOption struct {
    Text string `json:"text"`
    Value string `json:"value"`
}
