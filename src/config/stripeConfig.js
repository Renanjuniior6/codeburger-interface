import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51Q7GYI05fQNrWo5G6XoNxd4pOllnoB6iG2YZjvskXPHO1jRnyE8CoDW5XhRkUBNcmF07bcjPXtNm1PmcYBqVmuAu00eFI1galU",
)

export default stripePromise
