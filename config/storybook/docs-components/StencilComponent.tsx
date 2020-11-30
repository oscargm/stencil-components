import React, { FC } from 'react';
import { JsonDocsComponent } from '@stencil/core/internal';
import { Source } from './builtins';
import { Markdown } from './Markdown';
import { pascalCase } from 'change-case';

interface IStencilProps {
	metadata: JsonDocsComponent;
}

const uppercaseFirst = (s: string) => `${s[0].toUpperCase()}${s.slice(1)}`;
const getTableHeader = (headers: string[]): string => `| ${headers.join(' | ')} |`;
const getTableHeaderSeperator = (count: number): string => `| ${Array.from(new Array(count)).map(() => ':---').join(' | ')} |`;

const getDescription = (metadata: JsonDocsComponent): string => {
	return `${metadata.docs}`;
};

const getInputTable = (metadata: JsonDocsComponent): string => {
	const headers = ['Name', 'Type', 'Description', 'Required', 'Default'];
	const rows = metadata.props.map(p => {
		const cols = [
			`${p.attr || p.name}`,
			`\`${p.type}\``,
			`${p.docs || ''}`,
			`${p.optional ? 'No' : 'Yes'}`,
			`${p.default ? `\`${p.default}\`` : ''}`
		];

		return `| ${cols.join(' | ')} |`;
	});

	return `${getTableHeader(headers)}\n` + `${getTableHeaderSeperator(headers.length)}\n` + `${rows.join('\n')}`;
};

const getEventTable = (metadata: JsonDocsComponent): string => {
	const headers = ['Name', 'Handler Arg Type', 'Description'];
	const rows = metadata.events.map(e => {
		const cols = [`${e.event}`, `\`CustomEvent<${e.detail}>\``, `${e.docs || ''}`];

		return `| ${cols.join(' | ')} |`;
	});

	return `${getTableHeader(headers)}\n` + `${getTableHeaderSeperator(headers.length)}\n` + `${rows.join('\n')}`;
};

const angularExample = (metadata: JsonDocsComponent): string => {
	const inputs = metadata.props.map(p => `[${p.attr || p.name}]="${p.attr || p.name}"`);
	const outputs = metadata.events.map(e => `(${e.event})="on${uppercaseFirst(e.event)}(${e.detail ? '$event.detail' : ''})"`);

	return (
		`<${metadata.tag}` +
		`${inputs.length ? ' ' : ''}${inputs.join(' ')}` +
		`${outputs.length ? ' ' : ''}${outputs.join(' ')}>` +
		`</${metadata.tag}>`
	);
};

const reactExample = (metadata: JsonDocsComponent): string => {
	const inputs = metadata.props.map(p => `${p.attr || p.name}={${p.attr || p.name}}`);
	const outputs = metadata.events.map(
		e => `on${uppercaseFirst(e.event)}={(${e.detail ? 'ev' : ''}) => handle${uppercaseFirst(e.event)}(${e.detail ? 'ev.detail' : ''})}`
	);

	return (
		`<${pascalCase(metadata.tag)}` +
		`${inputs.length ? ' ' : ''}${inputs.join(' ')}` +
		`${outputs.length ? ' ' : ''}${outputs.join(' ')}>` +
		`</${pascalCase(metadata.tag)}>`
	);
};

const plainJsExample = (metadata: JsonDocsComponent): string => {
	const inputs = metadata.props.map(p => `el.setAttribute('${p.attr || p.name}', ${p.name});`);
	const inputsAlt = metadata.props.map(p => `// el['${p.attr || p.name}'] = ${p.name};`);
	const outputs = metadata.events.map(
		e =>
			`el.addEventListener('${e.event}', (${e.detail ? 'ev' : ''}) => handle${uppercaseFirst(e.event)}(${
				e.detail ? 'ev.detail' : ''
			}));`
	);

	return (
		`const el = document.createElement('${metadata.tag}');` +
		`${inputs.length ? '\n' : ''}${inputs.join('\n')}` +
		`${inputsAlt.length ? '\n// Update of non-scalar values must be done like below:\n' : ''}${inputsAlt.join('\n')}` +
		`${outputs.length ? '\n' : ''}${outputs.join('\n')}`
	);
};

export const StencilComponent: FC<IStencilProps> = ({ metadata }) => {
	return (
		<>
			<Markdown content={`# ${metadata.tag.toUpperCase()}`} />
			<Markdown content={getDescription(metadata)} />

			<Markdown content="## Attributes" />
			<Markdown content={getInputTable(metadata)} />

			<Markdown content="## Events" />
			<Markdown content={getEventTable(metadata)} />

			<Markdown content="## Framework Examples" />
			<Markdown content="### Angular" />
			<Source dark code={angularExample(metadata)} language="html" />
			<Markdown content="### React" />
			<Source dark code={reactExample(metadata)} language="tsx" />
			<Markdown content="### Plain Javascript" />
			<Source dark code={plainJsExample(metadata)} language="ts" />

			{/* <pre>{JSON.stringify(metadata, null, 2)}</pre> */}
		</>
	);
};
