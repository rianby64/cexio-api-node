declare module 'cexio-api-node' {

    interface TickerResponseOK   {
        timestamp: string,
        low: string,
        high: string,
        last: string,
        volume: string,
        volume30d: string,
        bid: number,
        ask: number,
        priceChange: string,
        priceChangePercentage: string,
        pair: string
    }

    interface AccountBalanceResponseOK {
        BTC:{
            available:string;
            orders:string
        };
        USD:{
            available:string;
            orders:string
        };
    }

    class PromiseRest {
        currency_limits();
        ticker(symbol: string): Promise<TickerResponseOK>;
        all_tickers();
        last_price();
        last_prices();
        historical_1m();
        orderbook();
        trade_history();
        account_balance(): Promise<AccountBalanceResponseOK>;
        open_orders();
        active_orders_status();
        archived_orders();
        cancel_order();
        cancel_pair_orders();
        place_order();
        get_order_details();
        get_order_transactions();
        get_crypto_address();
        get_my_fee();
        replace_order();
        open_position();
        open_positions();
        close_position();
        archived_positions();
        get_marginal_fee();
    }

    export class CEXIO {
        constructor(clientId: string, apiKey: string, apiSecret: string);

        promiseRest: PromiseRest;
    }
}
