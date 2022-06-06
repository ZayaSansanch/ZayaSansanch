package main

import (
	"fmt"
	"os/exec"
)

func main() {
	var text string
	cmd := exec.Command("mkfifo test")
	_ = cmd.Run()

	for {
		fmt.Println("text?")
		fmt.Scan(&text)
		cmd := exec.Command(`echo "` + text + `" > test`)
		_ = cmd.Run()
	}
}
