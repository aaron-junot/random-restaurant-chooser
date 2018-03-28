export interface Location {
    address: string;
    locality: string;
    city: string;
    city_id: number;
    latitude: string;
    longitude: string;
    zipcode: string;
    country_id: number;
    locality_verbose: string;
}

export interface UserRating {
    aggregate_rating: string;
    rating_text: string;
    rating_color: string;
    votes: string;
}

export class Restaurant {
    apikey: string;
    id: string;
    name: string;
    url: string;
    location: Location;
    switch_to_order_menu: number;
    cuisines: string;
    average_cost_for_two: number;
    price_range: number;
    currency: string;
    offers: any[];
    thumb: string;
    user_rating: UserRating;
    photos_url: string;
    menu_url: string;
    featured_image: string;
    has_online_delivery: number;
    is_delivering_now: number;
    deeplink: string;
    has_table_booking: number;
    events_url: string;
    establishment_types: any[];
}

export class Restaurants {
  restaurants: Restaurant[];
}
