CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text,
	`city` text NOT NULL,
	`province` text NOT NULL,
	`service` text,
	`event_date` text,
	`details_json` text NOT NULL,
	`attribution_json` text NOT NULL,
	`attachments_json` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`assigned_vendor` text,
	`ip_hash` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_inquiries_routing` ON `inquiries` (`province`,`service`,`status`);--> statement-breakpoint
CREATE INDEX `idx_inquiries_rate` ON `inquiries` (`ip_hash`,`created_at`);