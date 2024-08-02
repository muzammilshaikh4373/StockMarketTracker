import cron from "node-cron";
import { fetchData } from "../services/fetchData";

cron.schedule("*/10 * * * * *", fetchData); // fetch data every 10 seconds
