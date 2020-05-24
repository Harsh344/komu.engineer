package main

import (
	"bytes"
	"io/ioutil"
	"strings"
	"testing"

	"github.com/sirupsen/logrus"
)

// run this as;
//   go test -v ./...

func TestLogging(t *testing.T) {
	var buf bytes.Buffer

	// send logs to nowhere by default
	logrus.SetOutput(ioutil.Discard)
	logrus.SetFormatter(&logrus.JSONFormatter{})
	logrus.AddHook(&hook{writer: &buf})

	infoMsg1 := "infoMsg1"
	logrus.Info(infoMsg1)

	errorMsg := "errorMsg"
	logrus.Error(errorMsg)

	infoMsg2 := "infoMsg2"
	logrus.Info(infoMsg2)

	if !strings.Contains(buf.String(), infoMsg1) {
		t.Errorf("logs at INFO level preceding ERROR level should have been logged")
	}

	if !strings.Contains(buf.String(), errorMsg) {
		t.Errorf("logs at ERROR level should have been logged")
	}

	if strings.Contains(buf.String(), infoMsg2) {
		t.Errorf("logs at INFO level coming after ERROR level should NOT be logged")
	}

}
