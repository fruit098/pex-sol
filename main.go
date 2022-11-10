package main

import (
	"fmt"
	"os"
	"strconv"
)

func min(a, b int) int {
	if a <= b {
		return a
	}
	return b
}

func reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func main() {
	i := 0
	str := ""
	input := os.Args[1]
	for i < min(10, len(input)) {
		val := int(input[i]) % 5
		str += strconv.Itoa(val)
		i += 1
	}
	fmt.Println(reverse(str))
}
