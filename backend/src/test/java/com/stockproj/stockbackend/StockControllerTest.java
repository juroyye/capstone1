//package com.stockproj.stockbackend;
//
//import com.stockproj.stockbackend.controller.StockController;
//import com.stockproj.stockbackend.service.StockService;
//import org.junit.jupiter.api.Test;
//import org.mockito.Mockito;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.http.MediaType;
//import org.springframework.test.web.servlet.MockMvc;
//
//import static org.mockito.ArgumentMatchers.anyString;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@WebMvcTest(StockController.class)
//public class StockControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @MockBean
//    private StockService stockService;
//
//    @Test
//    void searchStockTest() throws Exception {
//        // Mock the service response
//        String mockResponse = "{\"count\":27,\"result\":[{\"description\":\"META PLATFORMS INC-CLASS A\",\"symbol\":\"META\"}]}";
//        Mockito.when(stockService.searchStock(anyString())).thenReturn(mockResponse);
//
//        // Perform the GET request and assert the response
//        mockMvc.perform(get("/stocks/search")
//                        .param("query", "META")
//                        .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk())
//                .andExpect(content().string(mockResponse));
//    }
//}
