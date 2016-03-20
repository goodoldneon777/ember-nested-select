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