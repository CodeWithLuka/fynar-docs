"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import Dropcursor from "@tiptap/extension-dropcursor";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import ImageResize from "tiptap-extension-resize-image";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";

import { useEditorStore } from "@/store/use-editor-store";

export const Editor = () => {
	const { setEditor } = useEditorStore();

	const editor = useEditor({
		onCreate({ editor }) {
			setEditor(editor);
		},
		onDestroy() {
			setEditor(null);
		},
		onUpdate({ editor }) {
			setEditor(editor);
		},
		onSelectionUpdate({ editor }) {
			setEditor(editor);
		},
		onTransaction({ editor }) {
			setEditor(editor);
		},
		onFocus({ editor }) {
			setEditor(editor);
		},
		onBlur({ editor }) {
			setEditor(editor);
		},
		onContentError({ editor }) {
			setEditor(editor);
		},
		editorProps: {
			attributes: {
				style: "padding-left: 56px; padding-right: 56px;",
				class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
			},
		},
		extensions: [
			Color,
			Dropcursor,
			FontFamily,
			Highlight.configure({ multicolor: true }),
			Image,
			ImageResize,
			Link.configure({
				openOnClick: false,
				autolink: true,
				defaultProtocol: "https",
				protocols: ["http", "https"],
				isAllowedUri: (url, ctx) => {
					try {
						// construct URL
						const parsedUrl = url.includes(":")
							? new URL(url)
							: new URL(`${ctx.defaultProtocol}://${url}`);

						// use default validation
						if (!ctx.defaultValidate(parsedUrl.href)) {
							return false;
						}

						// disallowed protocols
						const disallowedProtocols = ["ftp", "file", "mailto"];
						const protocol = parsedUrl.protocol.replace(":", "");

						if (disallowedProtocols.includes(protocol)) {
							return false;
						}

						// only allow protocols specified in ctx.protocols
						const allowedProtocols = ctx.protocols.map((p) =>
							typeof p === "string" ? p : p.scheme,
						);

						if (!allowedProtocols.includes(protocol)) {
							return false;
						}

						// disallowed domains
						const disallowedDomains = [
							"example-phishing.com",
							"malicious-site.net",
						];
						const domain = parsedUrl.hostname;

						if (disallowedDomains.includes(domain)) {
							return false;
						}

						// all checks have passed
						return true;
					} catch (error) {
						return false;
					}
				},
				shouldAutoLink: (url) => {
					try {
						// construct URL
						const parsedUrl = url.includes(":")
							? new URL(url)
							: new URL(`https://${url}`);

						// only auto-link if the domain is not in the disallowed list
						const disallowedDomains = [
							"example-no-autolink.com",
							"another-no-autolink.com",
						];
						const domain = parsedUrl.hostname;

						return !disallowedDomains.includes(domain);
					} catch (error) {
						return false;
					}
				},
			}),
			StarterKit,
			Table.configure({
				resizable: true,
			}),
			TableRow,
			TableHeader,
			TableCell,
			TaskList,
			TaskItem.configure({
				nested: true,
			}),
			Text,
			TextAlign.configure({
				types: ["heading", "paragraph"],
			}),
			TextStyle,
			Underline,
		],
		content: `
        <p>Hello Emmanuel</p>
      `,
	});

	return (
		<div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
			<div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
				<EditorContent editor={editor} />
			</div>
		</div>
	);
};
