package com.coincryptodata.api.controller;

import com.coincryptodata.api.setupAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CryptoController {

    @Autowired
    private setupAPI apiService;

    @GetMapping("/crypto")
    public String getCryptoData() {
        return apiService.getCryptoData();
    }
}
