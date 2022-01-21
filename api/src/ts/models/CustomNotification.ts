export interface CustomNotification {
    src: string;
    title: string;
    subtitle: string;
    extra?: string;
    external_url?: string;
    display: boolean;
    did_notify_open: boolean;
    did_notify_close: boolean;
    save(): void;
}