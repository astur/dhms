declare module "dhms" {
    /**
     * Parses dhms string to number of milliseconds or seconds
     * @param time Time to convert.
     * @param seconds Check whether to show the converted time as seconds.
     */
    function dhms(time: string, seconds?: boolean): number;
    export = dhms;
}
