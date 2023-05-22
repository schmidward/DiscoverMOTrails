package com.discovermotrails.securitybackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IndexController {

    @GetMapping("/index")
    public String renderHomePage() {
        System.out.println("\n *** USER GET request for the home page");
        return "Hello World!";
    }

    @GetMapping("/secure")
    public String renderSecureResource() {
        return "This is a page protected by login";
    }

}
