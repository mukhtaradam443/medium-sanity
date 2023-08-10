export default PortableText;
export function blockContentToPlainText(blocks?: [any]):string;

/**
 * Renders an arrey of portable as react components.
 * 
 * @param {object} props
 * @param {[object]} props.content Arrey of portable text blocks
 * @param {string} props.className optoin name
 * @param {object} props.serializers option serializers overrides
 */

declare function PortableText({content, className,serializers, ...additionalOption}:{
    content:[object];
    className:string;
    serializers:object;
    dataset:string;
    projectId:string;
}):any;
declare namespace PortableText{
    namespace propType {
        const content: any;
        const className: any;
        const serializers: any;
        const dataset: string;
        const projectId: string;
    }
}