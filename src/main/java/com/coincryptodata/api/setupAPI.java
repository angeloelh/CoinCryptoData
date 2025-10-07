package com.coincryptodata.api;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class setupAPI {
    private static final String API_KEY = "d6dcd246-94e5-46fa-ae86-eef9c0d537fd";
    private static final String API_URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    public String getCryptoData() {
        RestTemplate restTemplate = new RestTemplate();
        String url = UriComponentsBuilder.newInstance()
                .scheme("https")
                .host("pro-api.coinmarketcap.com")
                .path("/v1/cryptocurrency/listings/latest")
                .queryParam("start", "1")
                .queryParam("limit", "5")
                .queryParam("convert", "USD")
                .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("X-CMC_PRO_API_KEY", API_KEY);
        headers.set("Accept", "application/json");
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(url, org.springframework.http.HttpMethod.GET, entity, String.class);

        return response.getBody();
    }
}
