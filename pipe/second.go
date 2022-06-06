package main

import (
	"os/exec"
)

func main() {
	for {
		cmd := exec.Command(`cat test | xargs echo`)
		_ = cmd.Run()
	}
}
