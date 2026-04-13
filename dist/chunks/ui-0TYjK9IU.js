import { n as useTheme } from "./context-DYudN7ub.js";
import { Button } from "@base-ui/react/button";
import { jsx, jsxs } from "react/jsx-runtime";
import { Accordion } from "@base-ui/react/accordion";
import * as React$1 from "react";
import React, { createContext, createElement, forwardRef, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { Separator } from "@base-ui/react/separator";
import { Checkbox } from "@base-ui/react/checkbox";
import { Select } from "@base-ui/react/select";
import { Input } from "@base-ui/react/input";
import ReactDOM from "react-dom";
import { Dialog } from "@base-ui/react/dialog";
import { Combobox } from "@base-ui/react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/class-variance-authority/dist/index.mjs
/**
* Copyright 2022 Joe Bell. All rights reserved.
*
* This file is licensed to you under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with the
* License. You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations under
* the License.
*/ var falsyToString = (value) => typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
var cx = clsx;
var cva = (base, config) => (props) => {
	var _config_compoundVariants;
	if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
	const { variants, defaultVariants } = config;
	const getVariantClassNames = Object.keys(variants).map((variant) => {
		const variantProp = props === null || props === void 0 ? void 0 : props[variant];
		const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
		if (variantProp === null) return null;
		const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
		return variants[variant][variantKey];
	});
	const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
		let [key, value] = param;
		if (value === void 0) return acc;
		acc[key] = value;
		return acc;
	}, {});
	return cx(base, getVariantClassNames, config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param) => {
		let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
		return Object.entries(compoundVariantOptions).every((param) => {
			let [key, value] = param;
			return Array.isArray(value) ? value.includes({
				...defaultVariants,
				...propsWithoutUndefined
			}[key]) : {
				...defaultVariants,
				...propsWithoutUndefined
			}[key] === value;
		}) ? [
			...acc,
			cvClass,
			cvClassName
		] : acc;
	}, []), props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
};
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
/**
* Concatenates two arrays faster than the array spread operator.
*/
var concatArrays = (array1, array2) => {
	const combinedArray = new Array(array1.length + array2.length);
	for (let i = 0; i < array1.length; i++) combinedArray[i] = array1[i];
	for (let i = 0; i < array2.length; i++) combinedArray[array1.length + i] = array2[i];
	return combinedArray;
};
var createClassValidatorObject = (classGroupId, validator) => ({
	classGroupId,
	validator
});
var createClassPartObject = (nextPart = /* @__PURE__ */ new Map(), validators = null, classGroupId) => ({
	nextPart,
	validators,
	classGroupId
});
var CLASS_PART_SEPARATOR = "-";
var EMPTY_CONFLICTS = [];
var ARBITRARY_PROPERTY_PREFIX = "arbitrary..";
var createClassGroupUtils = (config) => {
	const classMap = createClassMap(config);
	const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
	const getClassGroupId = (className) => {
		if (className.startsWith("[") && className.endsWith("]")) return getGroupIdForArbitraryProperty(className);
		const classParts = className.split(CLASS_PART_SEPARATOR);
		return getGroupRecursive(classParts, classParts[0] === "" && classParts.length > 1 ? 1 : 0, classMap);
	};
	const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
		if (hasPostfixModifier) {
			const modifierConflicts = conflictingClassGroupModifiers[classGroupId];
			const baseConflicts = conflictingClassGroups[classGroupId];
			if (modifierConflicts) {
				if (baseConflicts) return concatArrays(baseConflicts, modifierConflicts);
				return modifierConflicts;
			}
			return baseConflicts || EMPTY_CONFLICTS;
		}
		return conflictingClassGroups[classGroupId] || EMPTY_CONFLICTS;
	};
	return {
		getClassGroupId,
		getConflictingClassGroupIds
	};
};
var getGroupRecursive = (classParts, startIndex, classPartObject) => {
	if (classParts.length - startIndex === 0) return classPartObject.classGroupId;
	const currentClassPart = classParts[startIndex];
	const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
	if (nextClassPartObject) {
		const result = getGroupRecursive(classParts, startIndex + 1, nextClassPartObject);
		if (result) return result;
	}
	const validators = classPartObject.validators;
	if (validators === null) return;
	const classRest = startIndex === 0 ? classParts.join(CLASS_PART_SEPARATOR) : classParts.slice(startIndex).join(CLASS_PART_SEPARATOR);
	const validatorsLength = validators.length;
	for (let i = 0; i < validatorsLength; i++) {
		const validatorObj = validators[i];
		if (validatorObj.validator(classRest)) return validatorObj.classGroupId;
	}
};
/**
* Get the class group ID for an arbitrary property.
*
* @param className - The class name to get the group ID for. Is expected to be string starting with `[` and ending with `]`.
*/
var getGroupIdForArbitraryProperty = (className) => className.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	const content = className.slice(1, -1);
	const colonIndex = content.indexOf(":");
	const property = content.slice(0, colonIndex);
	return property ? ARBITRARY_PROPERTY_PREFIX + property : void 0;
})();
/**
* Exported for testing only
*/
var createClassMap = (config) => {
	const { theme, classGroups } = config;
	return processClassGroups(classGroups, theme);
};
var processClassGroups = (classGroups, theme) => {
	const classMap = createClassPartObject();
	for (const classGroupId in classGroups) {
		const group = classGroups[classGroupId];
		processClassesRecursively(group, classMap, classGroupId, theme);
	}
	return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
	const len = classGroup.length;
	for (let i = 0; i < len; i++) {
		const classDefinition = classGroup[i];
		processClassDefinition(classDefinition, classPartObject, classGroupId, theme);
	}
};
var processClassDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (typeof classDefinition === "string") {
		processStringDefinition(classDefinition, classPartObject, classGroupId);
		return;
	}
	if (typeof classDefinition === "function") {
		processFunctionDefinition(classDefinition, classPartObject, classGroupId, theme);
		return;
	}
	processObjectDefinition(classDefinition, classPartObject, classGroupId, theme);
};
var processStringDefinition = (classDefinition, classPartObject, classGroupId) => {
	const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
	classPartObjectToEdit.classGroupId = classGroupId;
};
var processFunctionDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	if (isThemeGetter(classDefinition)) {
		processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
		return;
	}
	if (classPartObject.validators === null) classPartObject.validators = [];
	classPartObject.validators.push(createClassValidatorObject(classGroupId, classDefinition));
};
var processObjectDefinition = (classDefinition, classPartObject, classGroupId, theme) => {
	const entries = Object.entries(classDefinition);
	const len = entries.length;
	for (let i = 0; i < len; i++) {
		const [key, value] = entries[i];
		processClassesRecursively(value, getPart(classPartObject, key), classGroupId, theme);
	}
};
var getPart = (classPartObject, path) => {
	let current = classPartObject;
	const parts = path.split(CLASS_PART_SEPARATOR);
	const len = parts.length;
	for (let i = 0; i < len; i++) {
		const part = parts[i];
		let next = current.nextPart.get(part);
		if (!next) {
			next = createClassPartObject();
			current.nextPart.set(part, next);
		}
		current = next;
	}
	return current;
};
var isThemeGetter = (func) => "isThemeGetter" in func && func.isThemeGetter === true;
var createLruCache = (maxCacheSize) => {
	if (maxCacheSize < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let cacheSize = 0;
	let cache = Object.create(null);
	let previousCache = Object.create(null);
	const update = (key, value) => {
		cache[key] = value;
		cacheSize++;
		if (cacheSize > maxCacheSize) {
			cacheSize = 0;
			previousCache = cache;
			cache = Object.create(null);
		}
	};
	return {
		get(key) {
			let value = cache[key];
			if (value !== void 0) return value;
			if ((value = previousCache[key]) !== void 0) {
				update(key, value);
				return value;
			}
		},
		set(key, value) {
			if (key in cache) cache[key] = value;
			else update(key, value);
		}
	};
};
var IMPORTANT_MODIFIER = "!";
var MODIFIER_SEPARATOR = ":";
var EMPTY_MODIFIERS = [];
var createResultObject = (modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition, isExternal) => ({
	modifiers,
	hasImportantModifier,
	baseClassName,
	maybePostfixModifierPosition,
	isExternal
});
var createParseClassName = (config) => {
	const { prefix, experimentalParseClassName } = config;
	/**
	* Parse class name into parts.
	*
	* Inspired by `splitAtTopLevelOnly` used in Tailwind CSS
	* @see https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
	*/
	let parseClassName = (className) => {
		const modifiers = [];
		let bracketDepth = 0;
		let parenDepth = 0;
		let modifierStart = 0;
		let postfixModifierPosition;
		const len = className.length;
		for (let index = 0; index < len; index++) {
			const currentCharacter = className[index];
			if (bracketDepth === 0 && parenDepth === 0) {
				if (currentCharacter === MODIFIER_SEPARATOR) {
					modifiers.push(className.slice(modifierStart, index));
					modifierStart = index + 1;
					continue;
				}
				if (currentCharacter === "/") {
					postfixModifierPosition = index;
					continue;
				}
			}
			if (currentCharacter === "[") bracketDepth++;
			else if (currentCharacter === "]") bracketDepth--;
			else if (currentCharacter === "(") parenDepth++;
			else if (currentCharacter === ")") parenDepth--;
		}
		const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.slice(modifierStart);
		let baseClassName = baseClassNameWithImportantModifier;
		let hasImportantModifier = false;
		if (baseClassNameWithImportantModifier.endsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(0, -1);
			hasImportantModifier = true;
		} else if (baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER)) {
			baseClassName = baseClassNameWithImportantModifier.slice(1);
			hasImportantModifier = true;
		}
		const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
		return createResultObject(modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition);
	};
	if (prefix) {
		const fullPrefix = prefix + MODIFIER_SEPARATOR;
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.slice(fullPrefix.length)) : createResultObject(EMPTY_MODIFIERS, false, className, void 0, true);
	}
	if (experimentalParseClassName) {
		const parseClassNameOriginal = parseClassName;
		parseClassName = (className) => experimentalParseClassName({
			className,
			parseClassName: parseClassNameOriginal
		});
	}
	return parseClassName;
};
/**
* Sorts modifiers according to following schema:
* - Predefined modifiers are sorted alphabetically
* - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
*/
var createSortModifiers = (config) => {
	const modifierWeights = /* @__PURE__ */ new Map();
	config.orderSensitiveModifiers.forEach((mod, index) => {
		modifierWeights.set(mod, 1e6 + index);
	});
	return (modifiers) => {
		const result = [];
		let currentSegment = [];
		for (let i = 0; i < modifiers.length; i++) {
			const modifier = modifiers[i];
			const isArbitrary = modifier[0] === "[";
			const isOrderSensitive = modifierWeights.has(modifier);
			if (isArbitrary || isOrderSensitive) {
				if (currentSegment.length > 0) {
					currentSegment.sort();
					result.push(...currentSegment);
					currentSegment = [];
				}
				result.push(modifier);
			} else currentSegment.push(modifier);
		}
		if (currentSegment.length > 0) {
			currentSegment.sort();
			result.push(...currentSegment);
		}
		return result;
	};
};
var createConfigUtils = (config) => ({
	cache: createLruCache(config.cacheSize),
	parseClassName: createParseClassName(config),
	sortModifiers: createSortModifiers(config),
	...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
	const { parseClassName, getClassGroupId, getConflictingClassGroupIds, sortModifiers } = configUtils;
	/**
	* Set of classGroupIds in following format:
	* `{importantModifier}{variantModifiers}{classGroupId}`
	* @example 'float'
	* @example 'hover:focus:bg-color'
	* @example 'md:!pr'
	*/
	const classGroupsInConflict = [];
	const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
	let result = "";
	for (let index = classNames.length - 1; index >= 0; index -= 1) {
		const originalClassName = classNames[index];
		const { isExternal, modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
		if (isExternal) {
			result = originalClassName + (result.length > 0 ? " " + result : result);
			continue;
		}
		let hasPostfixModifier = !!maybePostfixModifierPosition;
		let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
		if (!classGroupId) {
			if (!hasPostfixModifier) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			classGroupId = getClassGroupId(baseClassName);
			if (!classGroupId) {
				result = originalClassName + (result.length > 0 ? " " + result : result);
				continue;
			}
			hasPostfixModifier = false;
		}
		const variantModifier = modifiers.length === 0 ? "" : modifiers.length === 1 ? modifiers[0] : sortModifiers(modifiers).join(":");
		const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
		const classId = modifierId + classGroupId;
		if (classGroupsInConflict.indexOf(classId) > -1) continue;
		classGroupsInConflict.push(classId);
		const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
		for (let i = 0; i < conflictGroups.length; ++i) {
			const group = conflictGroups[i];
			classGroupsInConflict.push(modifierId + group);
		}
		result = originalClassName + (result.length > 0 ? " " + result : result);
	}
	return result;
};
/**
* The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
*
* Specifically:
* - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
* - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
*
* Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
*/
var twJoin = (...classLists) => {
	let index = 0;
	let argument;
	let resolvedValue;
	let string = "";
	while (index < classLists.length) if (argument = classLists[index++]) {
		if (resolvedValue = toValue(argument)) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var toValue = (mix) => {
	if (typeof mix === "string") return mix;
	let resolvedValue;
	let string = "";
	for (let k = 0; k < mix.length; k++) if (mix[k]) {
		if (resolvedValue = toValue(mix[k])) {
			string && (string += " ");
			string += resolvedValue;
		}
	}
	return string;
};
var createTailwindMerge = (createConfigFirst, ...createConfigRest) => {
	let configUtils;
	let cacheGet;
	let cacheSet;
	let functionToCall;
	const initTailwindMerge = (classList) => {
		configUtils = createConfigUtils(createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst()));
		cacheGet = configUtils.cache.get;
		cacheSet = configUtils.cache.set;
		functionToCall = tailwindMerge;
		return tailwindMerge(classList);
	};
	const tailwindMerge = (classList) => {
		const cachedResult = cacheGet(classList);
		if (cachedResult) return cachedResult;
		const result = mergeClassList(classList, configUtils);
		cacheSet(classList, result);
		return result;
	};
	functionToCall = initTailwindMerge;
	return (...args) => functionToCall(twJoin(...args));
};
var fallbackThemeArr = [];
var fromTheme = (key) => {
	const themeGetter = (theme) => theme[key] || fallbackThemeArr;
	themeGetter.isThemeGetter = true;
	return themeGetter;
};
var arbitraryValueRegex = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex.test(value);
var isNumber$1 = (value) => !!value && !Number.isNaN(Number(value));
var isInteger = (value) => !!value && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber$1(value.slice(0, -1));
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var isAny = () => true;
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue(value) && !isArbitraryVariable(value);
var isArbitrarySize = (value) => getIsArbitraryValue(value, isLabelSize, isNever);
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, isLabelLength, isLengthOnly);
var isArbitraryNumber = (value) => getIsArbitraryValue(value, isLabelNumber, isNumber$1);
var isArbitraryWeight = (value) => getIsArbitraryValue(value, isLabelWeight, isAny);
var isArbitraryFamilyName = (value) => getIsArbitraryValue(value, isLabelFamilyName, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, isLabelPosition, isNever);
var isArbitraryImage = (value) => getIsArbitraryValue(value, isLabelImage, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, isLabelShadow, isShadow);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var isArbitraryVariableWeight = (value) => getIsArbitraryVariable(value, isLabelWeight, true);
var getIsArbitraryValue = (value, testLabel, testValue) => {
	const result = arbitraryValueRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return testValue(result[2]);
	}
	return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
	const result = arbitraryVariableRegex.exec(value);
	if (result) {
		if (result[1]) return testLabel(result[1]);
		return shouldMatchNoLabel;
	}
	return false;
};
var isLabelPosition = (label) => label === "position" || label === "percentage";
var isLabelImage = (label) => label === "image" || label === "url";
var isLabelSize = (label) => label === "length" || label === "size" || label === "bg-size";
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelWeight = (label) => label === "number" || label === "weight";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig = () => {
	/**
	* Theme getters for theme variable namespaces
	* @see https://tailwindcss.com/docs/theme#theme-variable-namespaces
	*/
	const themeColor = fromTheme("color");
	const themeFont = fromTheme("font");
	const themeText = fromTheme("text");
	const themeFontWeight = fromTheme("font-weight");
	const themeTracking = fromTheme("tracking");
	const themeLeading = fromTheme("leading");
	const themeBreakpoint = fromTheme("breakpoint");
	const themeContainer = fromTheme("container");
	const themeSpacing = fromTheme("spacing");
	const themeRadius = fromTheme("radius");
	const themeShadow = fromTheme("shadow");
	const themeInsetShadow = fromTheme("inset-shadow");
	const themeTextShadow = fromTheme("text-shadow");
	const themeDropShadow = fromTheme("drop-shadow");
	const themeBlur = fromTheme("blur");
	const themePerspective = fromTheme("perspective");
	const themeAspect = fromTheme("aspect");
	const themeEase = fromTheme("ease");
	const themeAnimate = fromTheme("animate");
	/**
	* Helpers to avoid repeating the same scales
	*
	* We use functions that create a new array every time they're called instead of static arrays.
	* This ensures that users who modify any scale by mutating the array (e.g. with `array.push(element)`) don't accidentally mutate arrays in other parts of the config.
	*/
	const scaleBreak = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	];
	const scalePosition = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	];
	const scalePositionWithArbitrary = () => [
		...scalePosition(),
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleOverflow = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	];
	const scaleOverscroll = () => [
		"auto",
		"contain",
		"none"
	];
	const scaleUnambiguousSpacing = () => [
		isArbitraryVariable,
		isArbitraryValue,
		themeSpacing
	];
	const scaleInset = () => [
		isFraction,
		"full",
		"auto",
		...scaleUnambiguousSpacing()
	];
	const scaleGridTemplateColsRows = () => [
		isInteger,
		"none",
		"subgrid",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartAndEnd = () => [
		"auto",
		{ span: [
			"full",
			isInteger,
			isArbitraryVariable,
			isArbitraryValue
		] },
		isInteger,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridColRowStartOrEnd = () => [
		isInteger,
		"auto",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleGridAutoColsRows = () => [
		"auto",
		"min",
		"max",
		"fr",
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleAlignPrimaryAxis = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	];
	const scaleAlignSecondaryAxis = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	];
	const scaleMargin = () => ["auto", ...scaleUnambiguousSpacing()];
	const scaleSizing = () => [
		isFraction,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingInline = () => [
		isFraction,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleSizingBlock = () => [
		isFraction,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...scaleUnambiguousSpacing()
	];
	const scaleColor = () => [
		themeColor,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBgPosition = () => [
		...scalePosition(),
		isArbitraryVariablePosition,
		isArbitraryPosition,
		{ position: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleBgRepeat = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }];
	const scaleBgSize = () => [
		"auto",
		"cover",
		"contain",
		isArbitraryVariableSize,
		isArbitrarySize,
		{ size: [isArbitraryVariable, isArbitraryValue] }
	];
	const scaleGradientStopPosition = () => [
		isPercent,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleRadius = () => [
		"",
		"none",
		"full",
		themeRadius,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleBorderWidth = () => [
		"",
		isNumber$1,
		isArbitraryVariableLength,
		isArbitraryLength
	];
	const scaleLineStyle = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	];
	const scaleBlendMode = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	];
	const scaleMaskImagePosition = () => [
		isNumber$1,
		isPercent,
		isArbitraryVariablePosition,
		isArbitraryPosition
	];
	const scaleBlur = () => [
		"",
		"none",
		themeBlur,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleRotate = () => [
		"none",
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleScale = () => [
		"none",
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleSkew = () => [
		isNumber$1,
		isArbitraryVariable,
		isArbitraryValue
	];
	const scaleTranslate = () => [
		isFraction,
		"full",
		...scaleUnambiguousSpacing()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [isTshirtSize],
			breakpoint: [isTshirtSize],
			color: [isAny],
			container: [isTshirtSize],
			"drop-shadow": [isTshirtSize],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [isAnyNonArbitrary],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [isTshirtSize],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [isTshirtSize],
			shadow: [isTshirtSize],
			spacing: ["px", isNumber$1],
			text: [isTshirtSize],
			"text-shadow": [isTshirtSize],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				isFraction,
				isArbitraryValue,
				isArbitraryVariable,
				themeAspect
			] }],
			container: ["container"],
			columns: [{ columns: [
				isNumber$1,
				isArbitraryValue,
				isArbitraryVariable,
				themeContainer
			] }],
			"break-after": [{ "break-after": scaleBreak() }],
			"break-before": [{ "break-before": scaleBreak() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: scalePositionWithArbitrary() }],
			overflow: [{ overflow: scaleOverflow() }],
			"overflow-x": [{ "overflow-x": scaleOverflow() }],
			"overflow-y": [{ "overflow-y": scaleOverflow() }],
			overscroll: [{ overscroll: scaleOverscroll() }],
			"overscroll-x": [{ "overscroll-x": scaleOverscroll() }],
			"overscroll-y": [{ "overscroll-y": scaleOverscroll() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: scaleInset() }],
			"inset-x": [{ "inset-x": scaleInset() }],
			"inset-y": [{ "inset-y": scaleInset() }],
			start: [{
				"inset-s": scaleInset(),
				start: scaleInset()
			}],
			end: [{
				"inset-e": scaleInset(),
				end: scaleInset()
			}],
			"inset-bs": [{ "inset-bs": scaleInset() }],
			"inset-be": [{ "inset-be": scaleInset() }],
			top: [{ top: scaleInset() }],
			right: [{ right: scaleInset() }],
			bottom: [{ bottom: scaleInset() }],
			left: [{ left: scaleInset() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				isInteger,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			basis: [{ basis: [
				isFraction,
				"full",
				"auto",
				themeContainer,
				...scaleUnambiguousSpacing()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				isNumber$1,
				isFraction,
				"auto",
				"initial",
				"none",
				isArbitraryValue
			] }],
			grow: [{ grow: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			shrink: [{ shrink: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			order: [{ order: [
				isInteger,
				"first",
				"last",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"grid-cols": [{ "grid-cols": scaleGridTemplateColsRows() }],
			"col-start-end": [{ col: scaleGridColRowStartAndEnd() }],
			"col-start": [{ "col-start": scaleGridColRowStartOrEnd() }],
			"col-end": [{ "col-end": scaleGridColRowStartOrEnd() }],
			"grid-rows": [{ "grid-rows": scaleGridTemplateColsRows() }],
			"row-start-end": [{ row: scaleGridColRowStartAndEnd() }],
			"row-start": [{ "row-start": scaleGridColRowStartOrEnd() }],
			"row-end": [{ "row-end": scaleGridColRowStartOrEnd() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": scaleGridAutoColsRows() }],
			"auto-rows": [{ "auto-rows": scaleGridAutoColsRows() }],
			gap: [{ gap: scaleUnambiguousSpacing() }],
			"gap-x": [{ "gap-x": scaleUnambiguousSpacing() }],
			"gap-y": [{ "gap-y": scaleUnambiguousSpacing() }],
			"justify-content": [{ justify: [...scaleAlignPrimaryAxis(), "normal"] }],
			"justify-items": [{ "justify-items": [...scaleAlignSecondaryAxis(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			"align-content": [{ content: ["normal", ...scaleAlignPrimaryAxis()] }],
			"align-items": [{ items: [...scaleAlignSecondaryAxis(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...scaleAlignSecondaryAxis(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": scaleAlignPrimaryAxis() }],
			"place-items": [{ "place-items": [...scaleAlignSecondaryAxis(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...scaleAlignSecondaryAxis()] }],
			p: [{ p: scaleUnambiguousSpacing() }],
			px: [{ px: scaleUnambiguousSpacing() }],
			py: [{ py: scaleUnambiguousSpacing() }],
			ps: [{ ps: scaleUnambiguousSpacing() }],
			pe: [{ pe: scaleUnambiguousSpacing() }],
			pbs: [{ pbs: scaleUnambiguousSpacing() }],
			pbe: [{ pbe: scaleUnambiguousSpacing() }],
			pt: [{ pt: scaleUnambiguousSpacing() }],
			pr: [{ pr: scaleUnambiguousSpacing() }],
			pb: [{ pb: scaleUnambiguousSpacing() }],
			pl: [{ pl: scaleUnambiguousSpacing() }],
			m: [{ m: scaleMargin() }],
			mx: [{ mx: scaleMargin() }],
			my: [{ my: scaleMargin() }],
			ms: [{ ms: scaleMargin() }],
			me: [{ me: scaleMargin() }],
			mbs: [{ mbs: scaleMargin() }],
			mbe: [{ mbe: scaleMargin() }],
			mt: [{ mt: scaleMargin() }],
			mr: [{ mr: scaleMargin() }],
			mb: [{ mb: scaleMargin() }],
			ml: [{ ml: scaleMargin() }],
			"space-x": [{ "space-x": scaleUnambiguousSpacing() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": scaleUnambiguousSpacing() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: scaleSizing() }],
			"inline-size": [{ inline: ["auto", ...scaleSizingInline()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...scaleSizingInline()] }],
			"max-inline-size": [{ "max-inline": ["none", ...scaleSizingInline()] }],
			"block-size": [{ block: ["auto", ...scaleSizingBlock()] }],
			"min-block-size": [{ "min-block": ["auto", ...scaleSizingBlock()] }],
			"max-block-size": [{ "max-block": ["none", ...scaleSizingBlock()] }],
			w: [{ w: [
				themeContainer,
				"screen",
				...scaleSizing()
			] }],
			"min-w": [{ "min-w": [
				themeContainer,
				"screen",
				"none",
				...scaleSizing()
			] }],
			"max-w": [{ "max-w": [
				themeContainer,
				"screen",
				"none",
				"prose",
				{ screen: [themeBreakpoint] },
				...scaleSizing()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...scaleSizing()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...scaleSizing()
			] }],
			"font-size": [{ text: [
				"base",
				themeText,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				themeFontWeight,
				isArbitraryVariableWeight,
				isArbitraryWeight
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				isPercent,
				isArbitraryValue
			] }],
			"font-family": [{ font: [
				isArbitraryVariableFamilyName,
				isArbitraryFamilyName,
				themeFont
			] }],
			"font-features": [{ "font-features": [isArbitraryValue] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				themeTracking,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"line-clamp": [{ "line-clamp": [
				isNumber$1,
				"none",
				isArbitraryVariable,
				isArbitraryNumber
			] }],
			leading: [{ leading: [themeLeading, ...scaleUnambiguousSpacing()] }],
			"list-image": [{ "list-image": [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: scaleColor() }],
			"text-color": [{ text: scaleColor() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...scaleLineStyle(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				isNumber$1,
				"from-font",
				"auto",
				isArbitraryVariable,
				isArbitraryLength
			] }],
			"text-decoration-color": [{ decoration: scaleColor() }],
			"underline-offset": [{ "underline-offset": [
				isNumber$1,
				"auto",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: scaleUnambiguousSpacing() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: scaleBgPosition() }],
			"bg-repeat": [{ bg: scaleBgRepeat() }],
			"bg-size": [{ bg: scaleBgSize() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					],
					radial: [
						"",
						isArbitraryVariable,
						isArbitraryValue
					],
					conic: [
						isInteger,
						isArbitraryVariable,
						isArbitraryValue
					]
				},
				isArbitraryVariableImage,
				isArbitraryImage
			] }],
			"bg-color": [{ bg: scaleColor() }],
			"gradient-from-pos": [{ from: scaleGradientStopPosition() }],
			"gradient-via-pos": [{ via: scaleGradientStopPosition() }],
			"gradient-to-pos": [{ to: scaleGradientStopPosition() }],
			"gradient-from": [{ from: scaleColor() }],
			"gradient-via": [{ via: scaleColor() }],
			"gradient-to": [{ to: scaleColor() }],
			rounded: [{ rounded: scaleRadius() }],
			"rounded-s": [{ "rounded-s": scaleRadius() }],
			"rounded-e": [{ "rounded-e": scaleRadius() }],
			"rounded-t": [{ "rounded-t": scaleRadius() }],
			"rounded-r": [{ "rounded-r": scaleRadius() }],
			"rounded-b": [{ "rounded-b": scaleRadius() }],
			"rounded-l": [{ "rounded-l": scaleRadius() }],
			"rounded-ss": [{ "rounded-ss": scaleRadius() }],
			"rounded-se": [{ "rounded-se": scaleRadius() }],
			"rounded-ee": [{ "rounded-ee": scaleRadius() }],
			"rounded-es": [{ "rounded-es": scaleRadius() }],
			"rounded-tl": [{ "rounded-tl": scaleRadius() }],
			"rounded-tr": [{ "rounded-tr": scaleRadius() }],
			"rounded-br": [{ "rounded-br": scaleRadius() }],
			"rounded-bl": [{ "rounded-bl": scaleRadius() }],
			"border-w": [{ border: scaleBorderWidth() }],
			"border-w-x": [{ "border-x": scaleBorderWidth() }],
			"border-w-y": [{ "border-y": scaleBorderWidth() }],
			"border-w-s": [{ "border-s": scaleBorderWidth() }],
			"border-w-e": [{ "border-e": scaleBorderWidth() }],
			"border-w-bs": [{ "border-bs": scaleBorderWidth() }],
			"border-w-be": [{ "border-be": scaleBorderWidth() }],
			"border-w-t": [{ "border-t": scaleBorderWidth() }],
			"border-w-r": [{ "border-r": scaleBorderWidth() }],
			"border-w-b": [{ "border-b": scaleBorderWidth() }],
			"border-w-l": [{ "border-l": scaleBorderWidth() }],
			"divide-x": [{ "divide-x": scaleBorderWidth() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": scaleBorderWidth() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...scaleLineStyle(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: scaleColor() }],
			"border-color-x": [{ "border-x": scaleColor() }],
			"border-color-y": [{ "border-y": scaleColor() }],
			"border-color-s": [{ "border-s": scaleColor() }],
			"border-color-e": [{ "border-e": scaleColor() }],
			"border-color-bs": [{ "border-bs": scaleColor() }],
			"border-color-be": [{ "border-be": scaleColor() }],
			"border-color-t": [{ "border-t": scaleColor() }],
			"border-color-r": [{ "border-r": scaleColor() }],
			"border-color-b": [{ "border-b": scaleColor() }],
			"border-color-l": [{ "border-l": scaleColor() }],
			"divide-color": [{ divide: scaleColor() }],
			"outline-style": [{ outline: [
				...scaleLineStyle(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"outline-w": [{ outline: [
				"",
				isNumber$1,
				isArbitraryVariableLength,
				isArbitraryLength
			] }],
			"outline-color": [{ outline: scaleColor() }],
			shadow: [{ shadow: [
				"",
				"none",
				themeShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"shadow-color": [{ shadow: scaleColor() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				themeInsetShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"inset-shadow-color": [{ "inset-shadow": scaleColor() }],
			"ring-w": [{ ring: scaleBorderWidth() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: scaleColor() }],
			"ring-offset-w": [{ "ring-offset": [isNumber$1, isArbitraryLength] }],
			"ring-offset-color": [{ "ring-offset": scaleColor() }],
			"inset-ring-w": [{ "inset-ring": scaleBorderWidth() }],
			"inset-ring-color": [{ "inset-ring": scaleColor() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				themeTextShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"text-shadow-color": [{ "text-shadow": scaleColor() }],
			opacity: [{ opacity: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"mix-blend": [{ "mix-blend": [
				...scaleBlendMode(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": scaleBlendMode() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [isNumber$1] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": scaleMaskImagePosition() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": scaleMaskImagePosition() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": scaleColor() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": scaleColor() }],
			"mask-image-t-from-pos": [{ "mask-t-from": scaleMaskImagePosition() }],
			"mask-image-t-to-pos": [{ "mask-t-to": scaleMaskImagePosition() }],
			"mask-image-t-from-color": [{ "mask-t-from": scaleColor() }],
			"mask-image-t-to-color": [{ "mask-t-to": scaleColor() }],
			"mask-image-r-from-pos": [{ "mask-r-from": scaleMaskImagePosition() }],
			"mask-image-r-to-pos": [{ "mask-r-to": scaleMaskImagePosition() }],
			"mask-image-r-from-color": [{ "mask-r-from": scaleColor() }],
			"mask-image-r-to-color": [{ "mask-r-to": scaleColor() }],
			"mask-image-b-from-pos": [{ "mask-b-from": scaleMaskImagePosition() }],
			"mask-image-b-to-pos": [{ "mask-b-to": scaleMaskImagePosition() }],
			"mask-image-b-from-color": [{ "mask-b-from": scaleColor() }],
			"mask-image-b-to-color": [{ "mask-b-to": scaleColor() }],
			"mask-image-l-from-pos": [{ "mask-l-from": scaleMaskImagePosition() }],
			"mask-image-l-to-pos": [{ "mask-l-to": scaleMaskImagePosition() }],
			"mask-image-l-from-color": [{ "mask-l-from": scaleColor() }],
			"mask-image-l-to-color": [{ "mask-l-to": scaleColor() }],
			"mask-image-x-from-pos": [{ "mask-x-from": scaleMaskImagePosition() }],
			"mask-image-x-to-pos": [{ "mask-x-to": scaleMaskImagePosition() }],
			"mask-image-x-from-color": [{ "mask-x-from": scaleColor() }],
			"mask-image-x-to-color": [{ "mask-x-to": scaleColor() }],
			"mask-image-y-from-pos": [{ "mask-y-from": scaleMaskImagePosition() }],
			"mask-image-y-to-pos": [{ "mask-y-to": scaleMaskImagePosition() }],
			"mask-image-y-from-color": [{ "mask-y-from": scaleColor() }],
			"mask-image-y-to-color": [{ "mask-y-to": scaleColor() }],
			"mask-image-radial": [{ "mask-radial": [isArbitraryVariable, isArbitraryValue] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": scaleMaskImagePosition() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": scaleMaskImagePosition() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": scaleColor() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": scaleColor() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": scalePosition() }],
			"mask-image-conic-pos": [{ "mask-conic": [isNumber$1] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": scaleMaskImagePosition() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": scaleMaskImagePosition() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": scaleColor() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": scaleColor() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: scaleBgPosition() }],
			"mask-repeat": [{ mask: scaleBgRepeat() }],
			"mask-size": [{ mask: scaleBgSize() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			filter: [{ filter: [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			blur: [{ blur: scaleBlur() }],
			brightness: [{ brightness: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			contrast: [{ contrast: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				themeDropShadow,
				isArbitraryVariableShadow,
				isArbitraryShadow
			] }],
			"drop-shadow-color": [{ "drop-shadow": scaleColor() }],
			grayscale: [{ grayscale: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"hue-rotate": [{ "hue-rotate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			invert: [{ invert: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			saturate: [{ saturate: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			sepia: [{ sepia: [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-blur": [{ "backdrop-blur": scaleBlur() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": scaleUnambiguousSpacing() }],
			"border-spacing-x": [{ "border-spacing-x": scaleUnambiguousSpacing() }],
			"border-spacing-y": [{ "border-spacing-y": scaleUnambiguousSpacing() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				isNumber$1,
				"initial",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				themeEase,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			delay: [{ delay: [
				isNumber$1,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			animate: [{ animate: [
				"none",
				themeAnimate,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				themePerspective,
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"perspective-origin": [{ "perspective-origin": scalePositionWithArbitrary() }],
			rotate: [{ rotate: scaleRotate() }],
			"rotate-x": [{ "rotate-x": scaleRotate() }],
			"rotate-y": [{ "rotate-y": scaleRotate() }],
			"rotate-z": [{ "rotate-z": scaleRotate() }],
			scale: [{ scale: scaleScale() }],
			"scale-x": [{ "scale-x": scaleScale() }],
			"scale-y": [{ "scale-y": scaleScale() }],
			"scale-z": [{ "scale-z": scaleScale() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: scaleSkew() }],
			"skew-x": [{ "skew-x": scaleSkew() }],
			"skew-y": [{ "skew-y": scaleSkew() }],
			transform: [{ transform: [
				isArbitraryVariable,
				isArbitraryValue,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: scalePositionWithArbitrary() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: scaleTranslate() }],
			"translate-x": [{ "translate-x": scaleTranslate() }],
			"translate-y": [{ "translate-y": scaleTranslate() }],
			"translate-z": [{ "translate-z": scaleTranslate() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: scaleColor() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: scaleColor() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": scaleUnambiguousSpacing() }],
			"scroll-mx": [{ "scroll-mx": scaleUnambiguousSpacing() }],
			"scroll-my": [{ "scroll-my": scaleUnambiguousSpacing() }],
			"scroll-ms": [{ "scroll-ms": scaleUnambiguousSpacing() }],
			"scroll-me": [{ "scroll-me": scaleUnambiguousSpacing() }],
			"scroll-mbs": [{ "scroll-mbs": scaleUnambiguousSpacing() }],
			"scroll-mbe": [{ "scroll-mbe": scaleUnambiguousSpacing() }],
			"scroll-mt": [{ "scroll-mt": scaleUnambiguousSpacing() }],
			"scroll-mr": [{ "scroll-mr": scaleUnambiguousSpacing() }],
			"scroll-mb": [{ "scroll-mb": scaleUnambiguousSpacing() }],
			"scroll-ml": [{ "scroll-ml": scaleUnambiguousSpacing() }],
			"scroll-p": [{ "scroll-p": scaleUnambiguousSpacing() }],
			"scroll-px": [{ "scroll-px": scaleUnambiguousSpacing() }],
			"scroll-py": [{ "scroll-py": scaleUnambiguousSpacing() }],
			"scroll-ps": [{ "scroll-ps": scaleUnambiguousSpacing() }],
			"scroll-pe": [{ "scroll-pe": scaleUnambiguousSpacing() }],
			"scroll-pbs": [{ "scroll-pbs": scaleUnambiguousSpacing() }],
			"scroll-pbe": [{ "scroll-pbe": scaleUnambiguousSpacing() }],
			"scroll-pt": [{ "scroll-pt": scaleUnambiguousSpacing() }],
			"scroll-pr": [{ "scroll-pr": scaleUnambiguousSpacing() }],
			"scroll-pb": [{ "scroll-pb": scaleUnambiguousSpacing() }],
			"scroll-pl": [{ "scroll-pl": scaleUnambiguousSpacing() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				isArbitraryVariable,
				isArbitraryValue
			] }],
			fill: [{ fill: ["none", ...scaleColor()] }],
			"stroke-w": [{ stroke: [
				isNumber$1,
				isArbitraryVariableLength,
				isArbitraryLength,
				isArbitraryNumber
			] }],
			stroke: [{ stroke: ["none", ...scaleColor()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
};
var twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
//#endregion
//#region src/components/shadcn/lib/utils.ts
function cn$1(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/shadcn/ui/button.tsx
var buttonVariantsConfig = {
	variant: {
		default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
		outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
		secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
		ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
		destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
		link: "text-primary underline-offset-4 hover:underline"
	},
	size: {
		default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
		xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
		sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
		lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
		icon: "size-8",
		"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
		"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
		"icon-lg": "size-9"
	}
};
var buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
	variants: buttonVariantsConfig,
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button$2({ className, variant = "default", size = "default", ...props }) {
	return /* @__PURE__ */ jsx(Button, {
		"data-slot": "button",
		className: cn$1(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = forwardRef(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => createElement("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = forwardRef(({ className, ...props }, ref) => createElement(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
var Info = createLucideIcon("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
var LoaderCircle = createLucideIcon("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]);
var OctagonX = createLucideIcon("octagon-x", [
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
		key: "2d38gg"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region src/components/shadcn/ui/accordion.tsx
function Accordion$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Root, {
		"data-slot": "accordion",
		className: cn$1("flex w-full flex-col", className),
		...props
	});
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Item, {
		"data-slot": "accordion-item",
		className: cn$1("not-last:border-b", className),
		...props
	});
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Header, {
		className: "flex",
		children: /* @__PURE__ */ jsxs(Accordion.Trigger, {
			"data-slot": "accordion-trigger",
			className: cn$1("group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring aria-disabled:pointer-events-none aria-disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground", className),
			...props,
			children: [
				children,
				/* @__PURE__ */ jsx(ChevronDown, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
				}),
				/* @__PURE__ */ jsx(ChevronUp, {
					"data-slot": "accordion-trigger-icon",
					className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
				})
			]
		})
	});
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(Accordion.Panel, {
		"data-slot": "accordion-content",
		className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: cn$1("h-(--accordion-panel-height) pt-0 pb-2.5 data-ending-style:h-0 data-starting-style:h-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
			children
		})
	});
}
//#endregion
//#region src/components/shadcn/ui/alert.tsx
var alertVariants = cva("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
	variants: { variant: {
		default: "bg-card text-card-foreground",
		destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
	} },
	defaultVariants: { variant: "default" }
});
function Alert({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert",
		role: "alert",
		className: cn$1(alertVariants({ variant }), className),
		...props
	});
}
function AlertTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-title",
		className: cn$1("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
		...props
	});
}
function AlertDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-description",
		className: cn$1("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className),
		...props
	});
}
function AlertAction({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "alert-action",
		className: cn$1("absolute top-2 right-2", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/badge.tsx
var badgeVariantsConfig = { variant: {
	default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
	secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
	destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
	outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
	ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
	link: "text-primary underline-offset-4 hover:underline"
} };
var badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
	variants: badgeVariantsConfig,
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant = "default", render, ...props }) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps({ className: cn$1(badgeVariants({ variant }), className) }, props),
		render,
		state: {
			slot: "badge",
			variant
		}
	});
}
//#endregion
//#region src/components/shadcn/ui/separator.tsx
function Separator$1({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ jsx(Separator, {
		"data-slot": "separator",
		orientation,
		className: cn$1("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/button-group.tsx
var buttonGroupVariantsConfig = { orientation: {
	horizontal: "*:data-slot:rounded-r-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
	vertical: "flex-col *:data-slot:rounded-b-none [&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0"
} };
var buttonGroupVariants = cva("flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: buttonGroupVariantsConfig,
	defaultVariants: { orientation: "horizontal" }
});
function ButtonGroup({ className, orientation, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": orientation,
		className: cn$1(buttonGroupVariants({ orientation }), className),
		...props
	});
}
function ButtonGroupText({ className, render, ...props }) {
	return useRender({
		defaultTagName: "div",
		props: mergeProps({ className: cn$1("flex items-center gap-2 rounded-lg border bg-muted px-2.5 text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className) }, props),
		render,
		state: { slot: "button-group-text" }
	});
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(Separator$1, {
		"data-slot": "button-group-separator",
		orientation,
		className: cn$1("relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto", className),
		...props
	});
}
//#endregion
//#region node_modules/@date-fns/tz/tzName/index.js
/**
* Time zone name format.
*/
/**
* The function returns the time zone name for the given date in the specified
* time zone.
*
* It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
* name in a long format, e.g. "Pacific Standard Time" or
* "Singapore Standard Time".
*
* It is possible to specify the format as the third argument using one of the following options
*
* - "short": e.g. "EDT" or "GMT+8".
* - "long": e.g. "Eastern Daylight Time".
* - "shortGeneric": e.g. "ET" or "Singapore Time".
* - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
*
* These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
*
* @param timeZone - Time zone name (IANA or UTC offset)
* @param date - Date object to get the time zone name for
* @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
*
* @returns Time zone name (e.g. "Singapore Standard Time")
*/
function tzName(timeZone, date, format = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone,
		timeZoneName: format
	}).format(date).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region node_modules/@date-fns/tz/tzOffset/index.js
var offsetFormatCache = {};
var offsetCache = {};
/**
* The function extracts UTC offset in minutes from the given date in specified
* time zone.
*
* Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
* mirrored to the sign of the offset in the time zone. For Asia/Singapore
* (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
*
* @param timeZone - Time zone name (IANA or UTC offset)
* @param date - Date to check the offset for
*
* @returns UTC offset in minutes
*/
function tzOffset(timeZone, date) {
	try {
		const offsetStr = (offsetFormatCache[timeZone] ||= new Intl.DateTimeFormat("en-US", {
			timeZone,
			timeZoneName: "longOffset"
		}).format)(date).split("GMT")[1];
		if (offsetStr in offsetCache) return offsetCache[offsetStr];
		return calcOffset(offsetStr, offsetStr.split(":"));
	} catch {
		if (timeZone in offsetCache) return offsetCache[timeZone];
		const captures = timeZone?.match(offsetRe);
		if (captures) return calcOffset(timeZone, captures.slice(1));
		return NaN;
	}
}
var offsetRe = /([+-]\d\d):?(\d\d)?/;
function calcOffset(cacheStr, values) {
	const hours = +(values[0] || 0);
	const minutes = +(values[1] || 0);
	const seconds = +(values[2] || 0) / 60;
	return offsetCache[cacheStr] = hours * 60 + minutes > 0 ? hours * 60 + minutes + seconds : hours * 60 - minutes - seconds;
}
//#endregion
//#region node_modules/@date-fns/tz/date/mini.js
var TZDateMini = class TZDateMini extends Date {
	constructor(...args) {
		super();
		if (args.length > 1 && typeof args[args.length - 1] === "string") this.timeZone = args.pop();
		this.internal = /* @__PURE__ */ new Date();
		if (isNaN(tzOffset(this.timeZone, this))) this.setTime(NaN);
		else if (!args.length) this.setTime(Date.now());
		else if (typeof args[0] === "number" && (args.length === 1 || args.length === 2 && typeof args[1] !== "number")) this.setTime(args[0]);
		else if (typeof args[0] === "string") this.setTime(+new Date(args[0]));
		else if (args[0] instanceof Date) this.setTime(+args[0]);
		else {
			this.setTime(+new Date(...args));
			adjustToSystemTZ(this, NaN);
			syncToInternal(this);
		}
	}
	static tz(tz, ...args) {
		return args.length ? new TZDateMini(...args, tz) : new TZDateMini(Date.now(), tz);
	}
	withTimeZone(timeZone) {
		return new TZDateMini(+this, timeZone);
	}
	getTimezoneOffset() {
		const offset = -tzOffset(this.timeZone, this);
		return offset > 0 ? Math.floor(offset) : Math.ceil(offset);
	}
	setTime(time) {
		Date.prototype.setTime.apply(this, arguments);
		syncToInternal(this);
		return +this;
	}
	[Symbol.for("constructDateFrom")](date) {
		return new TZDateMini(+new Date(date), this.timeZone);
	}
};
var re = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((method) => {
	if (!re.test(method)) return;
	const utcMethod = method.replace(re, "$1UTC");
	if (!TZDateMini.prototype[utcMethod]) return;
	if (method.startsWith("get")) TZDateMini.prototype[method] = function() {
		return this.internal[utcMethod]();
	};
	else {
		TZDateMini.prototype[method] = function() {
			Date.prototype[utcMethod].apply(this.internal, arguments);
			syncFromInternal(this);
			return +this;
		};
		TZDateMini.prototype[utcMethod] = function() {
			Date.prototype[utcMethod].apply(this, arguments);
			syncToInternal(this);
			return +this;
		};
	}
});
/**
* Function syncs time to internal date, applying the time zone offset.
*
* @param {Date} date - Date to sync
*/
function syncToInternal(date) {
	date.internal.setTime(+date);
	date.internal.setUTCSeconds(date.internal.getUTCSeconds() - Math.round(-tzOffset(date.timeZone, date) * 60));
}
/**
* Function syncs the internal date UTC values to the date. It allows to get
* accurate timestamp value.
*
* @param {Date} date - The date to sync
*/
function syncFromInternal(date) {
	Date.prototype.setFullYear.call(date, date.internal.getUTCFullYear(), date.internal.getUTCMonth(), date.internal.getUTCDate());
	Date.prototype.setHours.call(date, date.internal.getUTCHours(), date.internal.getUTCMinutes(), date.internal.getUTCSeconds(), date.internal.getUTCMilliseconds());
	adjustToSystemTZ(date);
}
/**
* Function adjusts the date to the system time zone. It uses the time zone
* differences to calculate the offset and adjust the date.
*
* @param {Date} date - Date to adjust
*/
function adjustToSystemTZ(date) {
	const baseOffset = tzOffset(date.timeZone, date);
	const offset = baseOffset > 0 ? Math.floor(baseOffset) : Math.ceil(baseOffset);
	const prevHour = /* @__PURE__ */ new Date(+date);
	prevHour.setUTCHours(prevHour.getUTCHours() - 1);
	const systemOffset = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset();
	const systemDSTChange = systemOffset - -(/* @__PURE__ */ new Date(+prevHour)).getTimezoneOffset();
	const dstShift = Date.prototype.getHours.apply(date) !== date.internal.getUTCHours();
	if (systemDSTChange && dstShift) date.internal.setUTCMinutes(date.internal.getUTCMinutes() + systemDSTChange);
	const offsetDiff = systemOffset - offset;
	if (offsetDiff) Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetDiff);
	const systemDate = /* @__PURE__ */ new Date(+date);
	systemDate.setUTCSeconds(0);
	const systemSecondsOffset = systemOffset > 0 ? systemDate.getSeconds() : (systemDate.getSeconds() - 60) % 60;
	const secondsOffset = Math.round(-(tzOffset(date.timeZone, date) * 60)) % 60;
	if (secondsOffset || systemSecondsOffset) {
		date.internal.setUTCSeconds(date.internal.getUTCSeconds() + secondsOffset);
		Date.prototype.setUTCSeconds.call(date, Date.prototype.getUTCSeconds.call(date) + secondsOffset + systemSecondsOffset);
	}
	const postBaseOffset = tzOffset(date.timeZone, date);
	const postOffset = postBaseOffset > 0 ? Math.floor(postBaseOffset) : Math.ceil(postBaseOffset);
	const postOffsetDiff = -(/* @__PURE__ */ new Date(+date)).getTimezoneOffset() - postOffset;
	const offsetChanged = postOffset !== offset;
	const postDiff = postOffsetDiff - offsetDiff;
	if (offsetChanged && postDiff) {
		Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + postDiff);
		const newBaseOffset = tzOffset(date.timeZone, date);
		const offsetChange = postOffset - (newBaseOffset > 0 ? Math.floor(newBaseOffset) : Math.ceil(newBaseOffset));
		if (offsetChange) {
			date.internal.setUTCMinutes(date.internal.getUTCMinutes() + offsetChange);
			Date.prototype.setUTCMinutes.call(date, Date.prototype.getUTCMinutes.call(date) + offsetChange);
		}
	}
}
//#endregion
//#region node_modules/@date-fns/tz/date/index.js
var TZDate = class TZDate extends TZDateMini {
	static tz(tz, ...args) {
		return args.length ? new TZDate(...args, tz) : new TZDate(Date.now(), tz);
	}
	toISOString() {
		const [sign, hours, minutes] = this.tzComponents();
		const tz = `${sign}${hours}:${minutes}`;
		return this.internal.toISOString().slice(0, -1) + tz;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		const [day, date, month, year] = this.internal.toUTCString().split(" ");
		return `${day?.slice(0, -1)} ${month} ${date} ${year}`;
	}
	toTimeString() {
		const time = this.internal.toUTCString().split(" ")[4];
		const [sign, hours, minutes] = this.tzComponents();
		return `${time} GMT${sign}${hours}${minutes} (${tzName(this.timeZone, this)})`;
	}
	toLocaleString(locales, options) {
		return Date.prototype.toLocaleString.call(this, locales, {
			...options,
			timeZone: options?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(locales, options) {
		return Date.prototype.toLocaleDateString.call(this, locales, {
			...options,
			timeZone: options?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(locales, options) {
		return Date.prototype.toLocaleTimeString.call(this, locales, {
			...options,
			timeZone: options?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		const offset = this.getTimezoneOffset();
		return [
			offset > 0 ? "-" : "+",
			String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0"),
			String(Math.abs(offset) % 60).padStart(2, "0")
		];
	}
	withTimeZone(timeZone) {
		return new TZDate(+this, timeZone);
	}
	[Symbol.for("constructDateFrom")](date) {
		return new TZDate(+new Date(date), this.timeZone);
	}
};
//#endregion
//#region node_modules/date-fns/constants.js
/**
* @constant
* @name daysInYear
* @summary Days in 1 year.
*
* @description
* How many days in a year.
*
* One years equals 365.2425 days according to the formula:
*
* > Leap year occurs every 4 years, except for years that are divisible by 100 and not divisible by 400.
* > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
*/
var daysInYear = 365.2425;
-(Math.pow(10, 8) * 24 * 60 * 60 * 1e3);
/**
* @constant
* @name millisecondsInWeek
* @summary Milliseconds in 1 week.
*/
var millisecondsInWeek = 6048e5;
/**
* @constant
* @name millisecondsInDay
* @summary Milliseconds in 1 day.
*/
var millisecondsInDay = 864e5;
/**
* @constant
* @name secondsInDay
* @summary Seconds in 1 day.
*/
var secondsInDay = 3600 * 24;
secondsInDay * 7;
secondsInDay * daysInYear / 12 * 3;
/**
* @constant
* @name constructFromSymbol
* @summary Symbol enabling Date extensions to inherit properties from the reference date.
*
* The symbol is used to enable the `constructFrom` function to construct a date
* using a reference date and a value. It allows to transfer extra properties
* from the reference date to the new date. It's useful for extensions like
* [`TZDate`](https://github.com/date-fns/tz) that accept a time zone as
* a constructor argument.
*/
var constructFromSymbol = Symbol.for("constructDateFrom");
//#endregion
//#region node_modules/date-fns/constructFrom.js
/**
* @name constructFrom
* @category Generic Helpers
* @summary Constructs a date using the reference date and the value
*
* @description
* The function constructs a new date using the constructor from the reference
* date and the given value. It helps to build generic functions that accept
* date extensions.
*
* It defaults to `Date` if the passed reference date is a number or a string.
*
* Starting from v3.7.0, it allows to construct a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
*
* @param date - The reference date to take constructor from
* @param value - The value to create the date
*
* @returns Date initialized using the given date and value
*
* @example
* import { constructFrom } from "./constructFrom/date-fns";
*
* // A function that clones a date preserving the original type
* function cloneDate<DateType extends Date>(date: DateType): DateType {
*   return constructFrom(
*     date, // Use constructor from the given date
*     date.getTime() // Use the date value to create a new date
*   );
* }
*/
function constructFrom(date, value) {
	if (typeof date === "function") return date(value);
	if (date && typeof date === "object" && constructFromSymbol in date) return date[constructFromSymbol](value);
	if (date instanceof Date) return new date.constructor(value);
	return new Date(value);
}
//#endregion
//#region node_modules/date-fns/toDate.js
/**
* @name toDate
* @category Common Helpers
* @summary Convert the given argument to an instance of Date.
*
* @description
* Convert the given argument to an instance of Date.
*
* If the argument is an instance of Date, the function returns its clone.
*
* If the argument is a number, it is treated as a timestamp.
*
* If the argument is none of the above, the function returns Invalid Date.
*
* Starting from v3.7.0, it clones a date using `[Symbol.for("constructDateFrom")]`
* enabling to transfer extra properties from the reference date to the new date.
* It's useful for extensions like [`TZDate`](https://github.com/date-fns/tz)
* that accept a time zone as a constructor argument.
*
* **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param argument - The value to convert
*
* @returns The parsed date in the local time zone
*
* @example
* // Clone the date:
* const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
* //=> Tue Feb 11 2014 11:30:30
*
* @example
* // Convert the timestamp to date:
* const result = toDate(1392098430000)
* //=> Tue Feb 11 2014 11:30:30
*/
function toDate(argument, context) {
	return constructFrom(context || argument, argument);
}
//#endregion
//#region node_modules/date-fns/addDays.js
/**
* The {@link addDays} function options.
*/
/**
* @name addDays
* @category Day Helpers
* @summary Add the specified number of days to the given date.
*
* @description
* Add the specified number of days to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of days to be added.
* @param options - An object with options
*
* @returns The new date with the days added
*
* @example
* // Add 10 days to 1 September 2014:
* const result = addDays(new Date(2014, 8, 1), 10)
* //=> Thu Sep 11 2014 00:00:00
*/
function addDays(date, amount, options) {
	const _date = toDate(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	_date.setDate(_date.getDate() + amount);
	return _date;
}
//#endregion
//#region node_modules/date-fns/addMonths.js
/**
* The {@link addMonths} function options.
*/
/**
* @name addMonths
* @category Month Helpers
* @summary Add the specified number of months to the given date.
*
* @description
* Add the specified number of months to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of months to be added.
* @param options - The options object
*
* @returns The new date with the months added
*
* @example
* // Add 5 months to 1 September 2014:
* const result = addMonths(new Date(2014, 8, 1), 5)
* //=> Sun Feb 01 2015 00:00:00
*
* // Add one month to 30 January 2023:
* const result = addMonths(new Date(2023, 0, 30), 1)
* //=> Tue Feb 28 2023 00:00:00
*/
function addMonths(date, amount, options) {
	const _date = toDate(date, options?.in);
	if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
	if (!amount) return _date;
	const dayOfMonth = _date.getDate();
	const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
	endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
	if (dayOfMonth >= endOfDesiredMonth.getDate()) return endOfDesiredMonth;
	else {
		_date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
		return _date;
	}
}
//#endregion
//#region node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions$1 = {};
function getDefaultOptions() {
	return defaultOptions$1;
}
//#endregion
//#region node_modules/date-fns/startOfWeek.js
/**
* The {@link startOfWeek} function options.
*/
/**
* @name startOfWeek
* @category Week Helpers
* @summary Return the start of a week for the given date.
*
* @description
* Return the start of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week
*
* @example
* // The start of a week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Aug 31 2014 00:00:00
*
* @example
* // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
* const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
	_date.setDate(_date.getDate() - diff);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/startOfISOWeek.js
/**
* The {@link startOfISOWeek} function options.
*/
/**
* @name startOfISOWeek
* @category ISO Week Helpers
* @summary Return the start of an ISO week for the given date.
*
* @description
* Return the start of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week
*
* @example
* // The start of an ISO week for 2 September 2014 11:55:00:
* const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfISOWeek(date, options) {
	return startOfWeek(date, {
		...options,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/getISOWeekYear.js
/**
* The {@link getISOWeekYear} function options.
*/
/**
* @name getISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Get the ISO week-numbering year of the given date.
*
* @description
* Get the ISO week-numbering year of the given date,
* which always starts 3 days before the year's first Thursday.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
*
* @returns The ISO week-numbering year
*
* @example
* // Which ISO-week numbering year is 2 January 2005?
* const result = getISOWeekYear(new Date(2005, 0, 2))
* //=> 2004
*/
function getISOWeekYear(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
	fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
	fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
	const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
	fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
	fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
	if (_date.getTime() >= startOfNextYear.getTime()) return year + 1;
	else if (_date.getTime() >= startOfThisYear.getTime()) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
/**
* Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
* They usually appear for dates that denote time before the timezones were introduced
* (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
* and GMT+01:00:00 after that date)
*
* Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
* which would lead to incorrect calculations.
*
* This function returns the timezone offset in milliseconds that takes seconds in account.
*/
function getTimezoneOffsetInMilliseconds(date) {
	const _date = toDate(date);
	const utcDate = new Date(Date.UTC(_date.getFullYear(), _date.getMonth(), _date.getDate(), _date.getHours(), _date.getMinutes(), _date.getSeconds(), _date.getMilliseconds()));
	utcDate.setUTCFullYear(_date.getFullYear());
	return +date - +utcDate;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
	const normalize = constructFrom.bind(null, context || dates.find((date) => typeof date === "object"));
	return dates.map(normalize);
}
//#endregion
//#region node_modules/date-fns/startOfDay.js
/**
* The {@link startOfDay} function options.
*/
/**
* @name startOfDay
* @category Day Helpers
* @summary Return the start of a day for the given date.
*
* @description
* Return the start of a day for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a day
*
* @example
* // The start of a day for 2 September 2014 11:55:00:
* const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 02 2014 00:00:00
*/
function startOfDay(date, options) {
	const _date = toDate(date, options?.in);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarDays.js
/**
* The {@link differenceInCalendarDays} function options.
*/
/**
* @name differenceInCalendarDays
* @category Day Helpers
* @summary Get the number of calendar days between the given dates.
*
* @description
* Get the number of calendar days between the given dates. This means that the times are removed
* from the dates and then the difference in days is calculated.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - The options object
*
* @returns The number of calendar days
*
* @example
* // How many calendar days are between
* // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
* const result = differenceInCalendarDays(
*   new Date(2012, 6, 2, 0, 0),
*   new Date(2011, 6, 2, 23, 0)
* )
* //=> 366
* // How many calendar days are between
* // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
* const result = differenceInCalendarDays(
*   new Date(2011, 6, 3, 0, 1),
*   new Date(2011, 6, 2, 23, 59)
* )
* //=> 1
*/
function differenceInCalendarDays(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const laterStartOfDay = startOfDay(laterDate_);
	const earlierStartOfDay = startOfDay(earlierDate_);
	const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
	const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
	return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}
//#endregion
//#region node_modules/date-fns/startOfISOWeekYear.js
/**
* The {@link startOfISOWeekYear} function options.
*/
/**
* @name startOfISOWeekYear
* @category ISO Week-Numbering Year Helpers
* @summary Return the start of an ISO week-numbering year for the given date.
*
* @description
* Return the start of an ISO week-numbering year,
* which always starts 3 days before the year's first Thursday.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of an ISO week-numbering year
*
* @example
* // The start of an ISO week-numbering year for 2 July 2005:
* const result = startOfISOWeekYear(new Date(2005, 6, 2))
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfISOWeekYear(date, options) {
	const year = getISOWeekYear(date, options);
	const fourthOfJanuary = constructFrom(options?.in || date, 0);
	fourthOfJanuary.setFullYear(year, 0, 4);
	fourthOfJanuary.setHours(0, 0, 0, 0);
	return startOfISOWeek(fourthOfJanuary);
}
//#endregion
//#region node_modules/date-fns/addWeeks.js
/**
* The {@link addWeeks} function options.
*/
/**
* @name addWeeks
* @category Week Helpers
* @summary Add the specified number of weeks to the given date.
*
* @description
* Add the specified number of weeks to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param amount - The amount of weeks to be added.
* @param options - An object with options
*
* @returns The new date with the weeks added
*
* @example
* // Add 4 weeks to 1 September 2014:
* const result = addWeeks(new Date(2014, 8, 1), 4)
* //=> Mon Sep 29 2014 00:00:00
*/
function addWeeks(date, amount, options) {
	return addDays(date, amount * 7, options);
}
//#endregion
//#region node_modules/date-fns/addYears.js
/**
* The {@link addYears} function options.
*/
/**
* @name addYears
* @category Year Helpers
* @summary Add the specified number of years to the given date.
*
* @description
* Add the specified number of years to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The date to be changed
* @param amount - The amount of years to be added.
* @param options - The options
*
* @returns The new date with the years added
*
* @example
* // Add 5 years to 1 September 2014:
* const result = addYears(new Date(2014, 8, 1), 5)
* //=> Sun Sep 01 2019 00:00:00
*/
function addYears(date, amount, options) {
	return addMonths(date, amount * 12, options);
}
//#endregion
//#region node_modules/date-fns/max.js
/**
* The {@link max} function options.
*/
/**
* @name max
* @category Common Helpers
* @summary Return the latest of the given dates.
*
* @description
* Return the latest of the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param dates - The dates to compare
*
* @returns The latest of the dates
*
* @example
* // Which of these dates is the latest?
* const result = max([
*   new Date(1989, 6, 10),
*   new Date(1987, 1, 11),
*   new Date(1995, 6, 2),
*   new Date(1990, 0, 1)
* ])
* //=> Sun Jul 02 1995 00:00:00
*/
function max(dates, options) {
	let result;
	let context = options?.in;
	dates.forEach((date) => {
		if (!context && typeof date === "object") context = constructFrom.bind(null, date);
		const date_ = toDate(date, context);
		if (!result || result < date_ || isNaN(+date_)) result = date_;
	});
	return constructFrom(context, result || NaN);
}
//#endregion
//#region node_modules/date-fns/min.js
/**
* The {@link min} function options.
*/
/**
* @name min
* @category Common Helpers
* @summary Returns the earliest of the given dates.
*
* @description
* Returns the earliest of the given dates.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param dates - The dates to compare
*
* @returns The earliest of the dates
*
* @example
* // Which of these dates is the earliest?
* const result = min([
*   new Date(1989, 6, 10),
*   new Date(1987, 1, 11),
*   new Date(1995, 6, 2),
*   new Date(1990, 0, 1)
* ])
* //=> Wed Feb 11 1987 00:00:00
*/
function min(dates, options) {
	let result;
	let context = options?.in;
	dates.forEach((date) => {
		if (!context && typeof date === "object") context = constructFrom.bind(null, date);
		const date_ = toDate(date, context);
		if (!result || result > date_ || isNaN(+date_)) result = date_;
	});
	return constructFrom(context, result || NaN);
}
//#endregion
//#region node_modules/date-fns/isSameDay.js
/**
* The {@link isSameDay} function options.
*/
/**
* @name isSameDay
* @category Day Helpers
* @summary Are the given dates in the same day (and year and month)?
*
* @description
* Are the given dates in the same day (and year and month)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same day (and year and month)
*
* @example
* // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
* const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
* //=> true
*
* @example
* // Are 4 September and 4 October in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
* //=> false
*
* @example
* // Are 4 September, 2014 and 4 September, 2015 in the same day?
* const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
* //=> false
*/
function isSameDay(laterDate, earlierDate, options) {
	const [dateLeft_, dateRight_] = normalizeDates(options?.in, laterDate, earlierDate);
	return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
//#endregion
//#region node_modules/date-fns/isDate.js
/**
* @name isDate
* @category Common Helpers
* @summary Is the given value a date?
*
* @description
* Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
*
* @param value - The value to check
*
* @returns True if the given value is a date
*
* @example
* // For a valid date:
* const result = isDate(new Date())
* //=> true
*
* @example
* // For an invalid date:
* const result = isDate(new Date(NaN))
* //=> true
*
* @example
* // For some value:
* const result = isDate('2014-02-31')
* //=> false
*
* @example
* // For an object:
* const result = isDate({})
* //=> false
*/
function isDate(value) {
	return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
//#endregion
//#region node_modules/date-fns/isValid.js
/**
* @name isValid
* @category Common Helpers
* @summary Is the given date valid?
*
* @description
* Returns false if argument is Invalid Date and true otherwise.
* Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
* Invalid Date is a Date, whose time value is NaN.
*
* Time value of Date: http://es5.github.io/#x15.9.1.1
*
* @param date - The date to check
*
* @returns The date is valid
*
* @example
* // For the valid date:
* const result = isValid(new Date(2014, 1, 31))
* //=> true
*
* @example
* // For the value, convertible into a date:
* const result = isValid(1393804800000)
* //=> true
*
* @example
* // For the invalid date:
* const result = isValid(new Date(''))
* //=> false
*/
function isValid(date) {
	return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}
//#endregion
//#region node_modules/date-fns/differenceInCalendarMonths.js
/**
* The {@link differenceInCalendarMonths} function options.
*/
/**
* @name differenceInCalendarMonths
* @category Month Helpers
* @summary Get the number of calendar months between the given dates.
*
* @description
* Get the number of calendar months between the given dates.
*
* @param laterDate - The later date
* @param earlierDate - The earlier date
* @param options - An object with options
*
* @returns The number of calendar months
*
* @example
* // How many calendar months are between 31 January 2014 and 1 September 2014?
* const result = differenceInCalendarMonths(
*   new Date(2014, 8, 1),
*   new Date(2014, 0, 31)
* )
* //=> 8
*/
function differenceInCalendarMonths(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	const yearsDiff = laterDate_.getFullYear() - earlierDate_.getFullYear();
	const monthsDiff = laterDate_.getMonth() - earlierDate_.getMonth();
	return yearsDiff * 12 + monthsDiff;
}
//#endregion
//#region node_modules/date-fns/endOfMonth.js
/**
* The {@link endOfMonth} function options.
*/
/**
* @name endOfMonth
* @category Month Helpers
* @summary Return the end of a month for the given date.
*
* @description
* Return the end of a month for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a month
*
* @example
* // The end of a month for 2 September 2014 11:55:00:
* const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Tue Sep 30 2014 23:59:59.999
*/
function endOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	const month = _date.getMonth();
	_date.setFullYear(_date.getFullYear(), month + 1, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/_lib/normalizeInterval.js
function normalizeInterval(context, interval) {
	const [start, end] = normalizeDates(context, interval.start, interval.end);
	return {
		start,
		end
	};
}
//#endregion
//#region node_modules/date-fns/eachMonthOfInterval.js
/**
* The {@link eachMonthOfInterval} function options.
*/
/**
* The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
*/
/**
* @name eachMonthOfInterval
* @category Interval Helpers
* @summary Return the array of months within the specified time interval.
*
* @description
* Return the array of months within the specified time interval.
*
* @typeParam IntervalType - Interval type.
* @typeParam Options - Options type.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of months from the month of the interval start to the month of the interval end
*
* @example
* // Each month between 6 February 2014 and 10 August 2014:
* const result = eachMonthOfInterval({
*   start: new Date(2014, 1, 6),
*   end: new Date(2014, 7, 10)
* })
* //=> [
* //   Sat Feb 01 2014 00:00:00,
* //   Sat Mar 01 2014 00:00:00,
* //   Tue Apr 01 2014 00:00:00,
* //   Thu May 01 2014 00:00:00,
* //   Sun Jun 01 2014 00:00:00,
* //   Tue Jul 01 2014 00:00:00,
* //   Fri Aug 01 2014 00:00:00
* // ]
*/
function eachMonthOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const endTime = reversed ? +start : +end;
	const date = reversed ? end : start;
	date.setHours(0, 0, 0, 0);
	date.setDate(1);
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+date <= endTime) {
		dates.push(constructFrom(start, date));
		date.setMonth(date.getMonth() + step);
	}
	return reversed ? dates.reverse() : dates;
}
//#endregion
//#region node_modules/date-fns/startOfMonth.js
/**
* The {@link startOfMonth} function options.
*/
/**
* @name startOfMonth
* @category Month Helpers
* @summary Return the start of a month for the given date.
*
* @description
* Return the start of a month for the given date. The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
* Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
* or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a month
*
* @example
* // The start of a month for 2 September 2014 11:55:00:
* const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
* //=> Mon Sep 01 2014 00:00:00
*/
function startOfMonth(date, options) {
	const _date = toDate(date, options?.in);
	_date.setDate(1);
	_date.setHours(0, 0, 0, 0);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfYear.js
/**
* The {@link endOfYear} function options.
*/
/**
* @name endOfYear
* @category Year Helpers
* @summary Return the end of a year for the given date.
*
* @description
* Return the end of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The end of a year
*
* @example
* // The end of a year for 2 September 2014 11:55:00:
* const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
* //=> Wed Dec 31 2014 23:59:59.999
*/
function endOfYear(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	_date.setFullYear(year + 1, 0, 0);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/startOfYear.js
/**
* The {@link startOfYear} function options.
*/
/**
* @name startOfYear
* @category Year Helpers
* @summary Return the start of a year for the given date.
*
* @description
* Return the start of a year for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - The options
*
* @returns The start of a year
*
* @example
* // The start of a year for 2 September 2014 11:55:00:
* const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
* //=> Wed Jan 01 2014 00:00:00
*/
function startOfYear(date, options) {
	const date_ = toDate(date, options?.in);
	date_.setFullYear(date_.getFullYear(), 0, 1);
	date_.setHours(0, 0, 0, 0);
	return date_;
}
//#endregion
//#region node_modules/date-fns/eachYearOfInterval.js
/**
* The {@link eachYearOfInterval} function options.
*/
/**
* The {@link eachYearOfInterval} function result type. It resolves the proper data type.
* It uses the first argument date object type, starting from the date argument,
* then the start interval date, and finally the end interval date. If
* a context function is passed, it uses the context function return type.
*/
/**
* @name eachYearOfInterval
* @category Interval Helpers
* @summary Return the array of yearly timestamps within the specified time interval.
*
* @description
* Return the array of yearly timestamps within the specified time interval.
*
* @typeParam IntervalType - Interval type.
* @typeParam Options - Options type.
*
* @param interval - The interval.
* @param options - An object with options.
*
* @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
*
* @example
* // Each year between 6 February 2014 and 10 August 2017:
* const result = eachYearOfInterval({
*   start: new Date(2014, 1, 6),
*   end: new Date(2017, 7, 10)
* })
* //=> [
* //   Wed Jan 01 2014 00:00:00,
* //   Thu Jan 01 2015 00:00:00,
* //   Fri Jan 01 2016 00:00:00,
* //   Sun Jan 01 2017 00:00:00
* // ]
*/
function eachYearOfInterval(interval, options) {
	const { start, end } = normalizeInterval(options?.in, interval);
	let reversed = +start > +end;
	const endTime = reversed ? +start : +end;
	const date = reversed ? end : start;
	date.setHours(0, 0, 0, 0);
	date.setMonth(0, 1);
	let step = options?.step ?? 1;
	if (!step) return [];
	if (step < 0) {
		step = -step;
		reversed = !reversed;
	}
	const dates = [];
	while (+date <= endTime) {
		dates.push(constructFrom(start, date));
		date.setFullYear(date.getFullYear() + step);
	}
	return reversed ? dates.reverse() : dates;
}
//#endregion
//#region node_modules/date-fns/endOfWeek.js
/**
* The {@link endOfWeek} function options.
*/
/**
* @name endOfWeek
* @category Week Helpers
* @summary Return the end of a week for the given date.
*
* @description
* Return the end of a week for the given date.
* The result will be in the local timezone.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of a week
*
* @example
* // The end of a week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sat Sep 06 2014 23:59:59.999
*
* @example
* // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
* const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
* //=> Sun Sep 07 2014 23:59:59.999
*/
function endOfWeek(date, options) {
	const defaultOptions = getDefaultOptions();
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const _date = toDate(date, options?.in);
	const day = _date.getDay();
	const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
	_date.setDate(_date.getDate() + diff);
	_date.setHours(23, 59, 59, 999);
	return _date;
}
//#endregion
//#region node_modules/date-fns/endOfISOWeek.js
/**
* The {@link endOfISOWeek} function options.
*/
/**
* @name endOfISOWeek
* @category ISO Week Helpers
* @summary Return the end of an ISO week for the given date.
*
* @description
* Return the end of an ISO week for the given date.
* The result will be in the local timezone.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The end of an ISO week
*
* @example
* // The end of an ISO week for 2 September 2014 11:55:00:
* const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
* //=> Sun Sep 07 2014 23:59:59.999
*/
function endOfISOWeek(date, options) {
	return endOfWeek(date, {
		...options,
		weekStartsOn: 1
	});
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
};
var formatDistance = (token, count, options) => {
	let result;
	const tokenValue = formatDistanceLocale[token];
	if (typeof tokenValue === "string") result = tokenValue;
	else if (count === 1) result = tokenValue.one;
	else result = tokenValue.other.replace("{{count}}", count.toString());
	if (options?.addSuffix) if (options.comparison && options.comparison > 0) return "in " + result;
	else return result + " ago";
	return result;
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
	return (options = {}) => {
		const width = options.width ? String(options.width) : args.defaultWidth;
		return args.formats[width] || args.formats[args.defaultWidth];
	};
}
var formatLong = {
	date: buildFormatLongFn({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: buildFormatLongFn({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: buildFormatLongFn({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
};
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
//#endregion
//#region node_modules/date-fns/locale/_lib/buildLocalizeFn.js
/**
* The localize function argument callback which allows to convert raw value to
* the actual type.
*
* @param value - The value to convert
*
* @returns The converted value
*/
/**
* The map of localized values for each width.
*/
/**
* The index type of the locale unit value. It types conversion of units of
* values that don't start at 0 (i.e. quarters).
*/
/**
* Converts the unit value to the tuple of values.
*/
/**
* The tuple of localized era values. The first element represents BC,
* the second element represents AD.
*/
/**
* The tuple of localized quarter values. The first element represents Q1.
*/
/**
* The tuple of localized day values. The first element represents Sunday.
*/
/**
* The tuple of localized month values. The first element represents January.
*/
function buildLocalizeFn(args) {
	return (value, options) => {
		const context = options?.context ? String(options.context) : "standalone";
		let valuesArray;
		if (context === "formatting" && args.formattingValues) {
			const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
			const width = options?.width ? String(options.width) : defaultWidth;
			valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
		} else {
			const defaultWidth = args.defaultWidth;
			const width = options?.width ? String(options.width) : args.defaultWidth;
			valuesArray = args.values[width] || args.values[defaultWidth];
		}
		const index = args.argumentCallback ? args.argumentCallback(value) : value;
		return valuesArray[index];
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
	narrow: ["B", "A"],
	abbreviated: ["BC", "AD"],
	wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
	narrow: [
		"1",
		"2",
		"3",
		"4"
	],
	abbreviated: [
		"Q1",
		"Q2",
		"Q3",
		"Q4"
	],
	wide: [
		"1st quarter",
		"2nd quarter",
		"3rd quarter",
		"4th quarter"
	]
};
var monthValues = {
	narrow: [
		"J",
		"F",
		"M",
		"A",
		"M",
		"J",
		"J",
		"A",
		"S",
		"O",
		"N",
		"D"
	],
	abbreviated: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	],
	wide: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	]
};
var dayValues = {
	narrow: [
		"S",
		"M",
		"T",
		"W",
		"T",
		"F",
		"S"
	],
	short: [
		"Su",
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa"
	],
	abbreviated: [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	],
	wide: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	]
};
var dayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "morning",
		afternoon: "afternoon",
		evening: "evening",
		night: "night"
	}
};
var formattingDayPeriodValues = {
	narrow: {
		am: "a",
		pm: "p",
		midnight: "mi",
		noon: "n",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	abbreviated: {
		am: "AM",
		pm: "PM",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	},
	wide: {
		am: "a.m.",
		pm: "p.m.",
		midnight: "midnight",
		noon: "noon",
		morning: "in the morning",
		afternoon: "in the afternoon",
		evening: "in the evening",
		night: "at night"
	}
};
var ordinalNumber = (dirtyNumber, _options) => {
	const number = Number(dirtyNumber);
	const rem100 = number % 100;
	if (rem100 > 20 || rem100 < 10) switch (rem100 % 10) {
		case 1: return number + "st";
		case 2: return number + "nd";
		case 3: return number + "rd";
	}
	return number + "th";
};
var localize = {
	ordinalNumber,
	era: buildLocalizeFn({
		values: eraValues,
		defaultWidth: "wide"
	}),
	quarter: buildLocalizeFn({
		values: quarterValues,
		defaultWidth: "wide",
		argumentCallback: (quarter) => quarter - 1
	}),
	month: buildLocalizeFn({
		values: monthValues,
		defaultWidth: "wide"
	}),
	day: buildLocalizeFn({
		values: dayValues,
		defaultWidth: "wide"
	}),
	dayPeriod: buildLocalizeFn({
		values: dayPeriodValues,
		defaultWidth: "wide",
		formattingValues: formattingDayPeriodValues,
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
	return (string, options = {}) => {
		const width = options.width;
		const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
		const matchResult = string.match(matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
		const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : findKey(parsePatterns, (pattern) => pattern.test(matchedString));
		let value;
		value = args.valueCallback ? args.valueCallback(key) : key;
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
function findKey(object, predicate) {
	for (const key in object) if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) return key;
}
function findIndex(array, predicate) {
	for (let key = 0; key < array.length; key++) if (predicate(array[key])) return key;
}
//#endregion
//#region node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
	return (string, options = {}) => {
		const matchResult = string.match(args.matchPattern);
		if (!matchResult) return null;
		const matchedString = matchResult[0];
		const parseResult = string.match(args.parsePattern);
		if (!parseResult) return null;
		let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
		value = options.valueCallback ? options.valueCallback(value) : value;
		const rest = string.slice(matchedString.length);
		return {
			value,
			rest
		};
	};
}
//#endregion
//#region node_modules/date-fns/locale/en-US.js
/**
* @category Locales
* @summary English locale (United States).
* @language English
* @iso-639-2 eng
* @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
* @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
*/
var enUS$1 = {
	code: "en-US",
	formatDistance,
	formatLong,
	formatRelative,
	localize,
	match: {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (value) => parseInt(value, 10)
		}),
		era: buildMatchFn({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (index) => index + 1
		}),
		month: buildMatchFn({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region node_modules/date-fns/getDayOfYear.js
/**
* The {@link getDayOfYear} function options.
*/
/**
* @name getDayOfYear
* @category Day Helpers
* @summary Get the day of the year of the given date.
*
* @description
* Get the day of the year of the given date.
*
* @param date - The given date
* @param options - The options
*
* @returns The day of year
*
* @example
* // Which day of the year is 2 July 2014?
* const result = getDayOfYear(new Date(2014, 6, 2))
* //=> 183
*/
function getDayOfYear(date, options) {
	const _date = toDate(date, options?.in);
	return differenceInCalendarDays(_date, startOfYear(_date)) + 1;
}
//#endregion
//#region node_modules/date-fns/getISOWeek.js
/**
* The {@link getISOWeek} function options.
*/
/**
* @name getISOWeek
* @category ISO Week Helpers
* @summary Get the ISO week of the given date.
*
* @description
* Get the ISO week of the given date.
*
* ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
*
* @param date - The given date
* @param options - The options
*
* @returns The ISO week
*
* @example
* // Which week of the ISO-week numbering year is 2 January 2005?
* const result = getISOWeek(new Date(2005, 0, 2))
* //=> 53
*/
function getISOWeek(date, options) {
	const _date = toDate(date, options?.in);
	const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/date-fns/getWeekYear.js
/**
* The {@link getWeekYear} function options.
*/
/**
* @name getWeekYear
* @category Week-Numbering Year Helpers
* @summary Get the local week-numbering year of the given date.
*
* @description
* Get the local week-numbering year of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options.
*
* @returns The local week-numbering year
*
* @example
* // Which week numbering year is 26 December 2004 with the default settings?
* const result = getWeekYear(new Date(2004, 11, 26))
* //=> 2005
*
* @example
* // Which week numbering year is 26 December 2004 if week starts on Saturday?
* const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
* //=> 2004
*
* @example
* // Which week numbering year is 26 December 2004 if the first week contains 4 January?
* const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
* //=> 2004
*/
function getWeekYear(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const defaultOptions = getDefaultOptions();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
	firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
	firstWeekOfNextYear.setHours(0, 0, 0, 0);
	const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
	const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
	firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
	firstWeekOfThisYear.setHours(0, 0, 0, 0);
	const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
	if (+_date >= +startOfNextYear) return year + 1;
	else if (+_date >= +startOfThisYear) return year;
	else return year - 1;
}
//#endregion
//#region node_modules/date-fns/startOfWeekYear.js
/**
* The {@link startOfWeekYear} function options.
*/
/**
* @name startOfWeekYear
* @category Week-Numbering Year Helpers
* @summary Return the start of a local week-numbering year for the given date.
*
* @description
* Return the start of a local week-numbering year.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type.
*
* @param date - The original date
* @param options - An object with options
*
* @returns The start of a week-numbering year
*
* @example
* // The start of an a week-numbering year for 2 July 2005 with default settings:
* const result = startOfWeekYear(new Date(2005, 6, 2))
* //=> Sun Dec 26 2004 00:00:00
*
* @example
* // The start of a week-numbering year for 2 July 2005
* // if Monday is the first day of week
* // and 4 January is always in the first week of the year:
* const result = startOfWeekYear(new Date(2005, 6, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> Mon Jan 03 2005 00:00:00
*/
function startOfWeekYear(date, options) {
	const defaultOptions = getDefaultOptions();
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const year = getWeekYear(date, options);
	const firstWeek = constructFrom(options?.in || date, 0);
	firstWeek.setFullYear(year, 0, firstWeekContainsDate);
	firstWeek.setHours(0, 0, 0, 0);
	return startOfWeek(firstWeek, options);
}
//#endregion
//#region node_modules/date-fns/getWeek.js
/**
* The {@link getWeek} function options.
*/
/**
* @name getWeek
* @category Week Helpers
* @summary Get the local week index of the given date.
*
* @description
* Get the local week index of the given date.
* The exact calculation depends on the values of
* `options.weekStartsOn` (which is the index of the first day of the week)
* and `options.firstWeekContainsDate` (which is the day of January, which is always in
* the first week of the week-numbering year)
*
* Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
*
* @param date - The given date
* @param options - An object with options
*
* @returns The week
*
* @example
* // Which week of the local week numbering year is 2 January 2005 with default options?
* const result = getWeek(new Date(2005, 0, 2))
* //=> 2
*
* @example
* // Which week of the local week numbering year is 2 January 2005,
* // if Monday is the first day of the week,
* // and the first week of the year always contains 4 January?
* const result = getWeek(new Date(2005, 0, 2), {
*   weekStartsOn: 1,
*   firstWeekContainsDate: 4
* })
* //=> 53
*/
function getWeek(date, options) {
	const _date = toDate(date, options?.in);
	const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
	return Math.round(diff / millisecondsInWeek) + 1;
}
//#endregion
//#region node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
	return (number < 0 ? "-" : "") + Math.abs(number).toString().padStart(targetLength, "0");
}
//#endregion
//#region node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
	y(date, token) {
		const signedYear = date.getFullYear();
		const year = signedYear > 0 ? signedYear : 1 - signedYear;
		return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
	},
	M(date, token) {
		const month = date.getMonth();
		return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
	},
	d(date, token) {
		return addLeadingZeros(date.getDate(), token.length);
	},
	a(date, token) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return dayPeriodEnumValue.toUpperCase();
			case "aaa": return dayPeriodEnumValue;
			case "aaaaa": return dayPeriodEnumValue[0];
			default: return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
		}
	},
	h(date, token) {
		return addLeadingZeros(date.getHours() % 12 || 12, token.length);
	},
	H(date, token) {
		return addLeadingZeros(date.getHours(), token.length);
	},
	m(date, token) {
		return addLeadingZeros(date.getMinutes(), token.length);
	},
	s(date, token) {
		return addLeadingZeros(date.getSeconds(), token.length);
	},
	S(date, token) {
		const numberOfDigits = token.length;
		const milliseconds = date.getMilliseconds();
		return addLeadingZeros(Math.trunc(milliseconds * Math.pow(10, numberOfDigits - 3)), token.length);
	}
};
//#endregion
//#region node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
};
var formatters = {
	G: function(date, token, localize) {
		const era = date.getFullYear() > 0 ? 1 : 0;
		switch (token) {
			case "G":
			case "GG":
			case "GGG": return localize.era(era, { width: "abbreviated" });
			case "GGGGG": return localize.era(era, { width: "narrow" });
			default: return localize.era(era, { width: "wide" });
		}
	},
	y: function(date, token, localize) {
		if (token === "yo") {
			const signedYear = date.getFullYear();
			const year = signedYear > 0 ? signedYear : 1 - signedYear;
			return localize.ordinalNumber(year, { unit: "year" });
		}
		return lightFormatters.y(date, token);
	},
	Y: function(date, token, localize, options) {
		const signedWeekYear = getWeekYear(date, options);
		const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
		if (token === "YY") return addLeadingZeros(weekYear % 100, 2);
		if (token === "Yo") return localize.ordinalNumber(weekYear, { unit: "year" });
		return addLeadingZeros(weekYear, token.length);
	},
	R: function(date, token) {
		return addLeadingZeros(getISOWeekYear(date), token.length);
	},
	u: function(date, token) {
		return addLeadingZeros(date.getFullYear(), token.length);
	},
	Q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "Q": return String(quarter);
			case "QQ": return addLeadingZeros(quarter, 2);
			case "Qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "QQQ": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return localize.quarter(quarter, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(date, token, localize) {
		const quarter = Math.ceil((date.getMonth() + 1) / 3);
		switch (token) {
			case "q": return String(quarter);
			case "qq": return addLeadingZeros(quarter, 2);
			case "qo": return localize.ordinalNumber(quarter, { unit: "quarter" });
			case "qqq": return localize.quarter(quarter, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return localize.quarter(quarter, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.quarter(quarter, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "M":
			case "MM": return lightFormatters.M(date, token);
			case "Mo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "MMM": return localize.month(month, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return localize.month(month, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(date, token, localize) {
		const month = date.getMonth();
		switch (token) {
			case "L": return String(month + 1);
			case "LL": return addLeadingZeros(month + 1, 2);
			case "Lo": return localize.ordinalNumber(month + 1, { unit: "month" });
			case "LLL": return localize.month(month, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return localize.month(month, {
				width: "narrow",
				context: "standalone"
			});
			default: return localize.month(month, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(date, token, localize, options) {
		const week = getWeek(date, options);
		if (token === "wo") return localize.ordinalNumber(week, { unit: "week" });
		return addLeadingZeros(week, token.length);
	},
	I: function(date, token, localize) {
		const isoWeek = getISOWeek(date);
		if (token === "Io") return localize.ordinalNumber(isoWeek, { unit: "week" });
		return addLeadingZeros(isoWeek, token.length);
	},
	d: function(date, token, localize) {
		if (token === "do") return localize.ordinalNumber(date.getDate(), { unit: "date" });
		return lightFormatters.d(date, token);
	},
	D: function(date, token, localize) {
		const dayOfYear = getDayOfYear(date);
		if (token === "Do") return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
		return addLeadingZeros(dayOfYear, token.length);
	},
	E: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		switch (token) {
			case "E":
			case "EE":
			case "EEE": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "e": return String(localDayOfWeek);
			case "ee": return addLeadingZeros(localDayOfWeek, 2);
			case "eo": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "eee": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(date, token, localize, options) {
		const dayOfWeek = date.getDay();
		const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
		switch (token) {
			case "c": return String(localDayOfWeek);
			case "cc": return addLeadingZeros(localDayOfWeek, token.length);
			case "co": return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
			case "ccc": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return localize.day(dayOfWeek, {
				width: "short",
				context: "standalone"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(date, token, localize) {
		const dayOfWeek = date.getDay();
		const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
		switch (token) {
			case "i": return String(isoDayOfWeek);
			case "ii": return addLeadingZeros(isoDayOfWeek, token.length);
			case "io": return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
			case "iii": return localize.day(dayOfWeek, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return localize.day(dayOfWeek, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return localize.day(dayOfWeek, {
				width: "short",
				context: "formatting"
			});
			default: return localize.day(dayOfWeek, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(date, token, localize) {
		const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "a":
			case "aa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours === 12) dayPeriodEnumValue = dayPeriodEnum.noon;
		else if (hours === 0) dayPeriodEnumValue = dayPeriodEnum.midnight;
		else dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
		switch (token) {
			case "b":
			case "bb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(date, token, localize) {
		const hours = date.getHours();
		let dayPeriodEnumValue;
		if (hours >= 17) dayPeriodEnumValue = dayPeriodEnum.evening;
		else if (hours >= 12) dayPeriodEnumValue = dayPeriodEnum.afternoon;
		else if (hours >= 4) dayPeriodEnumValue = dayPeriodEnum.morning;
		else dayPeriodEnumValue = dayPeriodEnum.night;
		switch (token) {
			case "B":
			case "BB":
			case "BBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return localize.dayPeriod(dayPeriodEnumValue, {
				width: "narrow",
				context: "formatting"
			});
			default: return localize.dayPeriod(dayPeriodEnumValue, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(date, token, localize) {
		if (token === "ho") {
			let hours = date.getHours() % 12;
			if (hours === 0) hours = 12;
			return localize.ordinalNumber(hours, { unit: "hour" });
		}
		return lightFormatters.h(date, token);
	},
	H: function(date, token, localize) {
		if (token === "Ho") return localize.ordinalNumber(date.getHours(), { unit: "hour" });
		return lightFormatters.H(date, token);
	},
	K: function(date, token, localize) {
		const hours = date.getHours() % 12;
		if (token === "Ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	k: function(date, token, localize) {
		let hours = date.getHours();
		if (hours === 0) hours = 24;
		if (token === "ko") return localize.ordinalNumber(hours, { unit: "hour" });
		return addLeadingZeros(hours, token.length);
	},
	m: function(date, token, localize) {
		if (token === "mo") return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
		return lightFormatters.m(date, token);
	},
	s: function(date, token, localize) {
		if (token === "so") return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
		return lightFormatters.s(date, token);
	},
	S: function(date, token) {
		return lightFormatters.S(date, token);
	},
	X: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		if (timezoneOffset === 0) return "Z";
		switch (token) {
			case "X": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "XXXX":
			case "XX": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	x: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "x": return formatTimezoneWithOptionalMinutes(timezoneOffset);
			case "xxxx":
			case "xx": return formatTimezone(timezoneOffset);
			default: return formatTimezone(timezoneOffset, ":");
		}
	},
	O: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	z: function(date, token, _localize) {
		const timezoneOffset = date.getTimezoneOffset();
		switch (token) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + formatTimezoneShort(timezoneOffset, ":");
			default: return "GMT" + formatTimezone(timezoneOffset, ":");
		}
	},
	t: function(date, token, _localize) {
		return addLeadingZeros(Math.trunc(+date / 1e3), token.length);
	},
	T: function(date, token, _localize) {
		return addLeadingZeros(+date, token.length);
	}
};
function formatTimezoneShort(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = Math.trunc(absOffset / 60);
	const minutes = absOffset % 60;
	if (minutes === 0) return sign + String(hours);
	return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
	if (offset % 60 === 0) return (offset > 0 ? "-" : "+") + addLeadingZeros(Math.abs(offset) / 60, 2);
	return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
	const sign = offset > 0 ? "-" : "+";
	const absOffset = Math.abs(offset);
	const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
	const minutes = addLeadingZeros(absOffset % 60, 2);
	return sign + hours + delimiter + minutes;
}
//#endregion
//#region node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "P": return formatLong.date({ width: "short" });
		case "PP": return formatLong.date({ width: "medium" });
		case "PPP": return formatLong.date({ width: "long" });
		default: return formatLong.date({ width: "full" });
	}
};
var timeLongFormatter = (pattern, formatLong) => {
	switch (pattern) {
		case "p": return formatLong.time({ width: "short" });
		case "pp": return formatLong.time({ width: "medium" });
		case "ppp": return formatLong.time({ width: "long" });
		default: return formatLong.time({ width: "full" });
	}
};
var dateTimeLongFormatter = (pattern, formatLong) => {
	const matchResult = pattern.match(/(P+)(p+)?/) || [];
	const datePattern = matchResult[1];
	const timePattern = matchResult[2];
	if (!timePattern) return dateLongFormatter(pattern, formatLong);
	let dateTimeFormat;
	switch (datePattern) {
		case "P":
			dateTimeFormat = formatLong.dateTime({ width: "short" });
			break;
		case "PP":
			dateTimeFormat = formatLong.dateTime({ width: "medium" });
			break;
		case "PPP":
			dateTimeFormat = formatLong.dateTime({ width: "long" });
			break;
		default:
			dateTimeFormat = formatLong.dateTime({ width: "full" });
			break;
	}
	return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
	p: timeLongFormatter,
	P: dateTimeLongFormatter
};
//#endregion
//#region node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function isProtectedDayOfYearToken(token) {
	return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
	return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
	const _message = message(token, format, input);
	console.warn(_message);
	if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format, input) {
	const subject = token[0] === "Y" ? "years" : "days of the month";
	return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
* The {@link format} function options.
*/
/**
* @name format
* @alias formatDate
* @category Common Helpers
* @summary Format the date.
*
* @description
* Return the formatted date string in the given format. The result may vary by locale.
*
* > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
* > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* The characters wrapped between two single quotes characters (') are escaped.
* Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
* (see the last example)
*
* Format of the string is based on Unicode Technical Standard #35:
* https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
* with a few additions (see note 7 below the table).
*
* Accepted patterns:
* | Unit                            | Pattern | Result examples                   | Notes |
* |---------------------------------|---------|-----------------------------------|-------|
* | Era                             | G..GGG  | AD, BC                            |       |
* |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
* |                                 | GGGGG   | A, B                              |       |
* | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
* |                                 | yy      | 44, 01, 00, 17                    | 5     |
* |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
* |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
* |                                 | yyyyy   | ...                               | 3,5   |
* | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
* |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
* |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
* |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
* |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
* |                                 | YYYYY   | ...                               | 3,5   |
* | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
* |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
* |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
* |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
* |                                 | RRRRR   | ...                               | 3,5,7 |
* | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
* |                                 | uu      | -43, 01, 1900, 2017               | 5     |
* |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
* |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
* |                                 | uuuuu   | ...                               | 3,5   |
* | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
* |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | QQ      | 01, 02, 03, 04                    |       |
* |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
* |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
* | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
* |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
* |                                 | qq      | 01, 02, 03, 04                    |       |
* |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
* |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
* |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
* | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
* |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | MM      | 01, 02, ..., 12                   |       |
* |                                 | MMM     | Jan, Feb, ..., Dec                |       |
* |                                 | MMMM    | January, February, ..., December  | 2     |
* |                                 | MMMMM   | J, F, ..., D                      |       |
* | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
* |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
* |                                 | LL      | 01, 02, ..., 12                   |       |
* |                                 | LLL     | Jan, Feb, ..., Dec                |       |
* |                                 | LLLL    | January, February, ..., December  | 2     |
* |                                 | LLLLL   | J, F, ..., D                      |       |
* | Local week of year              | w       | 1, 2, ..., 53                     |       |
* |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | ww      | 01, 02, ..., 53                   |       |
* | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
* |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
* |                                 | II      | 01, 02, ..., 53                   | 7     |
* | Day of month                    | d       | 1, 2, ..., 31                     |       |
* |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
* |                                 | dd      | 01, 02, ..., 31                   |       |
* | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
* |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
* |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
* |                                 | DDD     | 001, 002, ..., 365, 366           |       |
* |                                 | DDDD    | ...                               | 3     |
* | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
* |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
* |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
* |                                 | ii      | 01, 02, ..., 07                   | 7     |
* |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
* |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
* |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
* |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
* | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
* |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | ee      | 02, 03, ..., 01                   |       |
* |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | eeeee   | M, T, W, T, F, S, S               |       |
* |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
* |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
* |                                 | cc      | 02, 03, ..., 01                   |       |
* |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
* |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
* |                                 | ccccc   | M, T, W, T, F, S, S               |       |
* |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
* | AM, PM                          | a..aa   | AM, PM                            |       |
* |                                 | aaa     | am, pm                            |       |
* |                                 | aaaa    | a.m., p.m.                        | 2     |
* |                                 | aaaaa   | a, p                              |       |
* | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
* |                                 | bbb     | am, pm, noon, midnight            |       |
* |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
* |                                 | bbbbb   | a, p, n, mi                       |       |
* | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
* |                                 | BBBB    | at night, in the morning, ...     | 2     |
* |                                 | BBBBB   | at night, in the morning, ...     |       |
* | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
* |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
* |                                 | hh      | 01, 02, ..., 11, 12               |       |
* | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
* |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
* |                                 | HH      | 00, 01, 02, ..., 23               |       |
* | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
* |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
* |                                 | KK      | 01, 02, ..., 11, 00               |       |
* | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
* |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
* |                                 | kk      | 24, 01, 02, ..., 23               |       |
* | Minute                          | m       | 0, 1, ..., 59                     |       |
* |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
* |                                 | mm      | 00, 01, ..., 59                   |       |
* | Second                          | s       | 0, 1, ..., 59                     |       |
* |                                 | so      | 0th, 1st, ..., 59th               | 7     |
* |                                 | ss      | 00, 01, ..., 59                   |       |
* | Fraction of second              | S       | 0, 1, ..., 9                      |       |
* |                                 | SS      | 00, 01, ..., 99                   |       |
* |                                 | SSS     | 000, 001, ..., 999                |       |
* |                                 | SSSS    | ...                               | 3     |
* | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
* |                                 | XX      | -0800, +0530, Z                   |       |
* |                                 | XXX     | -08:00, +05:30, Z                 |       |
* |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
* |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
* | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
* |                                 | xx      | -0800, +0530, +0000               |       |
* |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
* |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
* |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
* | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
* |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
* | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
* |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
* | Seconds timestamp               | t       | 512969520                         | 7     |
* |                                 | tt      | ...                               | 3,7   |
* | Milliseconds timestamp          | T       | 512969520900                      | 7     |
* |                                 | TT      | ...                               | 3,7   |
* | Long localized date             | P       | 04/29/1453                        | 7     |
* |                                 | PP      | Apr 29, 1453                      | 7     |
* |                                 | PPP     | April 29th, 1453                  | 7     |
* |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
* | Long localized time             | p       | 12:00 AM                          | 7     |
* |                                 | pp      | 12:00:00 AM                       | 7     |
* |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
* |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
* | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
* |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
* |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
* |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
* Notes:
* 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
*    are the same as "stand-alone" units, but are different in some languages.
*    "Formatting" units are declined according to the rules of the language
*    in the context of a date. "Stand-alone" units are always nominative singular:
*
*    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
*
*    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
*
* 2. Any sequence of the identical letters is a pattern, unless it is escaped by
*    the single quote characters (see below).
*    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
*    the output will be the same as default pattern for this unit, usually
*    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
*    are marked with "2" in the last column of the table.
*
*    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
*
*    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
*
*    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
*
* 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
*    The output will be padded with zeros to match the length of the pattern.
*
*    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
*
* 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
*    These tokens represent the shortest form of the quarter.
*
* 5. The main difference between `y` and `u` patterns are B.C. years:
*
*    | Year | `y` | `u` |
*    |------|-----|-----|
*    | AC 1 |   1 |   1 |
*    | BC 1 |   1 |   0 |
*    | BC 2 |   2 |  -1 |
*
*    Also `yy` always returns the last two digits of a year,
*    while `uu` pads single digit years to 2 characters and returns other years unchanged:
*
*    | Year | `yy` | `uu` |
*    |------|------|------|
*    | 1    |   01 |   01 |
*    | 14   |   14 |   14 |
*    | 376  |   76 |  376 |
*    | 1453 |   53 | 1453 |
*
*    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
*    except local week-numbering years are dependent on `options.weekStartsOn`
*    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
*    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
*
* 6. Specific non-location timezones are currently unavailable in `date-fns`,
*    so right now these tokens fall back to GMT timezones.
*
* 7. These patterns are not in the Unicode Technical Standard #35:
*    - `i`: ISO day of week
*    - `I`: ISO week of year
*    - `R`: ISO week-numbering year
*    - `t`: seconds timestamp
*    - `T`: milliseconds timestamp
*    - `o`: ordinal number modifier
*    - `P`: long localized date
*    - `p`: long localized time
*
* 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
*    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
*    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
*
* @param date - The original date
* @param format - The string of tokens
* @param options - An object with options
*
* @returns The formatted date string
*
* @throws `date` must not be Invalid Date
* @throws `options.locale` must contain `localize` property
* @throws `options.locale` must contain `formatLong` property
* @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
* @throws format string contains an unescaped latin alphabet character
*
* @example
* // Represent 11 February 2014 in middle-endian format:
* const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
* //=> '02/11/2014'
*
* @example
* // Represent 2 July 2014 in Esperanto:
* import { eoLocale } from 'date-fns/locale/eo'
* const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
*   locale: eoLocale
* })
* //=> '2-a de julio 2014'
*
* @example
* // Escape string by single quote characters:
* const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
* //=> "3 o'clock"
*/
function format(date, formatStr, options) {
	const defaultOptions = getDefaultOptions();
	const locale = options?.locale ?? defaultOptions.locale ?? enUS$1;
	const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
	const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
	const originalDate = toDate(date, options?.in);
	if (!isValid(originalDate)) throw new RangeError("Invalid time value");
	let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
		const firstCharacter = substring[0];
		if (firstCharacter === "p" || firstCharacter === "P") {
			const longFormatter = longFormatters[firstCharacter];
			return longFormatter(substring, locale.formatLong);
		}
		return substring;
	}).join("").match(formattingTokensRegExp).map((substring) => {
		if (substring === "''") return {
			isToken: false,
			value: "'"
		};
		const firstCharacter = substring[0];
		if (firstCharacter === "'") return {
			isToken: false,
			value: cleanEscapedString(substring)
		};
		if (formatters[firstCharacter]) return {
			isToken: true,
			value: substring
		};
		if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
		return {
			isToken: false,
			value: substring
		};
	});
	if (locale.localize.preprocessor) parts = locale.localize.preprocessor(originalDate, parts);
	const formatterOptions = {
		firstWeekContainsDate,
		weekStartsOn,
		locale
	};
	return parts.map((part) => {
		if (!part.isToken) return part.value;
		const token = part.value;
		if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) warnOrThrowProtectedError(token, formatStr, String(date));
		const formatter = formatters[token[0]];
		return formatter(originalDate, token, locale.localize, formatterOptions);
	}).join("");
}
function cleanEscapedString(input) {
	const matched = input.match(escapedStringRegExp);
	if (!matched) return input;
	return matched[1].replace(doubleQuoteRegExp, "'");
}
//#endregion
//#region node_modules/date-fns/getDaysInMonth.js
/**
* The {@link getDaysInMonth} function options.
*/
/**
* @name getDaysInMonth
* @category Month Helpers
* @summary Get the number of days in a month of the given date.
*
* @description
* Get the number of days in a month of the given date, considering the context if provided.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The number of days in a month
*
* @example
* // How many days are in February 2000?
* const result = getDaysInMonth(new Date(2000, 1))
* //=> 29
*/
function getDaysInMonth(date, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const monthIndex = _date.getMonth();
	const lastDayOfMonth = constructFrom(_date, 0);
	lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
	lastDayOfMonth.setHours(0, 0, 0, 0);
	return lastDayOfMonth.getDate();
}
//#endregion
//#region node_modules/date-fns/getMonth.js
/**
* The {@link getMonth} function options.
*/
/**
* @name getMonth
* @category Month Helpers
* @summary Get the month of the given date.
*
* @description
* Get the month of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The month index (0-11)
*
* @example
* // Which month is 29 February 2012?
* const result = getMonth(new Date(2012, 1, 29))
* //=> 1
*/
function getMonth(date, options) {
	return toDate(date, options?.in).getMonth();
}
//#endregion
//#region node_modules/date-fns/getYear.js
/**
* The {@link getYear} function options.
*/
/**
* @name getYear
* @category Year Helpers
* @summary Get the year of the given date.
*
* @description
* Get the year of the given date.
*
* @param date - The given date
* @param options - An object with options
*
* @returns The year
*
* @example
* // Which year is 2 July 2014?
* const result = getYear(new Date(2014, 6, 2))
* //=> 2014
*/
function getYear(date, options) {
	return toDate(date, options?.in).getFullYear();
}
//#endregion
//#region node_modules/date-fns/isAfter.js
/**
* @name isAfter
* @category Common Helpers
* @summary Is the first date after the second one?
*
* @description
* Is the first date after the second one?
*
* @param date - The date that should be after the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is after the second date
*
* @example
* // Is 10 July 1989 after 11 February 1987?
* const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> true
*/
function isAfter(date, dateToCompare) {
	return +toDate(date) > +toDate(dateToCompare);
}
//#endregion
//#region node_modules/date-fns/isBefore.js
/**
* @name isBefore
* @category Common Helpers
* @summary Is the first date before the second one?
*
* @description
* Is the first date before the second one?
*
* @param date - The date that should be before the other one to return true
* @param dateToCompare - The date to compare with
*
* @returns The first date is before the second date
*
* @example
* // Is 10 July 1989 before 11 February 1987?
* const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
* //=> false
*/
function isBefore(date, dateToCompare) {
	return +toDate(date) < +toDate(dateToCompare);
}
//#endregion
//#region node_modules/date-fns/isSameMonth.js
/**
* The {@link isSameMonth} function options.
*/
/**
* @name isSameMonth
* @category Month Helpers
* @summary Are the given dates in the same month (and year)?
*
* @description
* Are the given dates in the same month (and year)?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same month (and year)
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*
* @example
* // Are 2 September 2014 and 25 September 2015 in the same month?
* const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
* //=> false
*/
function isSameMonth(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}
//#endregion
//#region node_modules/date-fns/isSameYear.js
/**
* The {@link isSameYear} function options.
*/
/**
* @name isSameYear
* @category Year Helpers
* @summary Are the given dates in the same year?
*
* @description
* Are the given dates in the same year?
*
* @param laterDate - The first date to check
* @param earlierDate - The second date to check
* @param options - An object with options
*
* @returns The dates are in the same year
*
* @example
* // Are 2 September 2014 and 25 September 2014 in the same year?
* const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
* //=> true
*/
function isSameYear(laterDate, earlierDate, options) {
	const [laterDate_, earlierDate_] = normalizeDates(options?.in, laterDate, earlierDate);
	return laterDate_.getFullYear() === earlierDate_.getFullYear();
}
//#endregion
//#region node_modules/date-fns/setMonth.js
/**
* The {@link setMonth} function options.
*/
/**
* @name setMonth
* @category Month Helpers
* @summary Set the month to the given date.
*
* @description
* Set the month to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param month - The month index to set (0-11)
* @param options - The options
*
* @returns The new date with the month set
*
* @example
* // Set February to 1 September 2014:
* const result = setMonth(new Date(2014, 8, 1), 1)
* //=> Sat Feb 01 2014 00:00:00
*/
function setMonth(date, month, options) {
	const _date = toDate(date, options?.in);
	const year = _date.getFullYear();
	const day = _date.getDate();
	const midMonth = constructFrom(options?.in || date, 0);
	midMonth.setFullYear(year, month, 15);
	midMonth.setHours(0, 0, 0, 0);
	const daysInMonth = getDaysInMonth(midMonth);
	_date.setMonth(month, Math.min(day, daysInMonth));
	return _date;
}
//#endregion
//#region node_modules/date-fns/setYear.js
/**
* The {@link setYear} function options.
*/
/**
* @name setYear
* @category Year Helpers
* @summary Set the year to the given date.
*
* @description
* Set the year to the given date.
*
* @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
* @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
*
* @param date - The date to be changed
* @param year - The year of the new date
* @param options - An object with options.
*
* @returns The new date with the year set
*
* @example
* // Set year 2013 to 1 September 2014:
* const result = setYear(new Date(2014, 8, 1), 2013)
* //=> Sun Sep 01 2013 00:00:00
*/
function setYear(date, year, options) {
	const date_ = toDate(date, options?.in);
	if (isNaN(+date_)) return constructFrom(options?.in || date, NaN);
	date_.setFullYear(year);
	return date_;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var FIVE_WEEKS = 5;
var FOUR_WEEKS = 4;
/**
* Returns the number of weeks to display in the broadcast calendar for a given
* month.
*
* The broadcast calendar may have either 4 or 5 weeks in a month, depending on
* the start and end dates of the broadcast weeks.
*
* @since 9.4.0
* @param month The month for which to calculate the number of weeks.
* @param dateLib The date library to use for date manipulation.
* @returns The number of weeks in the broadcast calendar (4 or 5).
*/
function getBroadcastWeeksInMonth(month, dateLib) {
	const firstDayOfMonth = dateLib.startOfMonth(month);
	const firstDayOfWeek = firstDayOfMonth.getDay() > 0 ? firstDayOfMonth.getDay() : 7;
	const broadcastStartDate = dateLib.addDays(month, -firstDayOfWeek + 1);
	const lastDateOfLastWeek = dateLib.addDays(broadcastStartDate, FIVE_WEEKS * 7 - 1);
	return dateLib.getMonth(month) === dateLib.getMonth(lastDateOfLastWeek) ? FIVE_WEEKS : FOUR_WEEKS;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
/**
* Returns the start date of the week in the broadcast calendar.
*
* The broadcast week starts on Monday. If the first day of the month is not a
* Monday, this function calculates the previous Monday as the start of the
* broadcast week.
*
* @since 9.4.0
* @param date The date for which to calculate the start of the broadcast week.
* @param dateLib The date library to use for date manipulation.
* @returns The start date of the broadcast week.
*/
function startOfBroadcastWeek(date, dateLib) {
	const firstOfMonth = dateLib.startOfMonth(date);
	const dayOfWeek = firstOfMonth.getDay();
	if (dayOfWeek === 1) return firstOfMonth;
	else if (dayOfWeek === 0) return dateLib.addDays(firstOfMonth, -6);
	else return dateLib.addDays(firstOfMonth, -1 * (dayOfWeek - 1));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
/**
* Returns the end date of the week in the broadcast calendar.
*
* The broadcast week ends on the last day of the last broadcast week for the
* given date.
*
* @since 9.4.0
* @param date The date for which to calculate the end of the broadcast week.
* @param dateLib The date library to use for date manipulation.
* @returns The end date of the broadcast week.
*/
function endOfBroadcastWeek(date, dateLib) {
	const startDate = startOfBroadcastWeek(date, dateLib);
	const numberOfWeeks = getBroadcastWeeksInMonth(date, dateLib);
	return dateLib.addDays(startDate, numberOfWeeks * 7 - 1);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/locale/en-US.js
/** English (United States) locale extended with DayPicker-specific translations. */
var enUS = {
	...enUS$1,
	labels: {
		labelDayButton: (date, modifiers, options, dateLib) => {
			let formatDate;
			if (dateLib && typeof dateLib.format === "function") formatDate = dateLib.format.bind(dateLib);
			else formatDate = (d, pattern) => format(d, pattern, {
				locale: enUS$1,
				...options
			});
			let label = formatDate(date, "PPPP");
			if (modifiers.today) label = `Today, ${label}`;
			if (modifiers.selected) label = `${label}, selected`;
			return label;
		},
		labelMonthDropdown: "Choose the Month",
		labelNext: "Go to the Next Month",
		labelPrevious: "Go to the Previous Month",
		labelWeekNumber: (weekNumber) => `Week ${weekNumber}`,
		labelYearDropdown: "Choose the Year",
		labelGrid: (date, options, dateLib) => {
			let formatDate;
			if (dateLib && typeof dateLib.format === "function") formatDate = dateLib.format.bind(dateLib);
			else formatDate = (d, pattern) => format(d, pattern, {
				locale: enUS$1,
				...options
			});
			return formatDate(date, "LLLL yyyy");
		},
		labelGridcell: (date, modifiers, options, dateLib) => {
			let formatDate;
			if (dateLib && typeof dateLib.format === "function") formatDate = dateLib.format.bind(dateLib);
			else formatDate = (d, pattern) => format(d, pattern, {
				locale: enUS$1,
				...options
			});
			let label = formatDate(date, "PPPP");
			if (modifiers?.today) label = `Today, ${label}`;
			return label;
		},
		labelNav: "Navigation bar",
		labelWeekNumberHeader: "Week Number",
		labelWeekday: (date, options, dateLib) => {
			let formatDate;
			if (dateLib && typeof dateLib.format === "function") formatDate = dateLib.format.bind(dateLib);
			else formatDate = (d, pattern) => format(d, pattern, {
				locale: enUS$1,
				...options
			});
			return formatDate(date, "cccc");
		}
	}
};
//#endregion
//#region node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
* A wrapper class around [date-fns](http://date-fns.org) that provides utility
* methods for date manipulation and formatting.
*
* @since 9.2.0
* @example
*   const dateLib = new DateLib({ locale: es });
*   const newDate = dateLib.addDays(new Date(), 5);
*/
var DateLib = class DateLib {
	/**
	* Creates an instance of `DateLib`.
	*
	* @param options Configuration options for the date library.
	* @param overrides Custom overrides for the date library functions.
	*/
	constructor(options, overrides) {
		/**
		* Reference to the built-in Date constructor.
		*
		* @deprecated Use `newDate()` or `today()`.
		*/
		this.Date = Date;
		/**
		* Creates a new `Date` object representing today's date.
		*
		* @since 9.5.0
		* @returns A `Date` object for today's date.
		*/
		this.today = () => {
			if (this.overrides?.today) return this.overrides.today();
			if (this.options.timeZone) return TZDate.tz(this.options.timeZone);
			return new this.Date();
		};
		/**
		* Creates a new `Date` object with the specified year, month, and day.
		*
		* @since 9.5.0
		* @param year The year.
		* @param monthIndex The month (0-11).
		* @param date The day of the month.
		* @returns A new `Date` object.
		*/
		this.newDate = (year, monthIndex, date) => {
			if (this.overrides?.newDate) return this.overrides.newDate(year, monthIndex, date);
			if (this.options.timeZone) return new TZDate(year, monthIndex, date, this.options.timeZone);
			return new Date(year, monthIndex, date);
		};
		/**
		* Adds the specified number of days to the given date.
		*
		* @param date The date to add days to.
		* @param amount The number of days to add.
		* @returns The new date with the days added.
		*/
		this.addDays = (date, amount) => {
			return this.overrides?.addDays ? this.overrides.addDays(date, amount) : addDays(date, amount);
		};
		/**
		* Adds the specified number of months to the given date.
		*
		* @param date The date to add months to.
		* @param amount The number of months to add.
		* @returns The new date with the months added.
		*/
		this.addMonths = (date, amount) => {
			return this.overrides?.addMonths ? this.overrides.addMonths(date, amount) : addMonths(date, amount);
		};
		/**
		* Adds the specified number of weeks to the given date.
		*
		* @param date The date to add weeks to.
		* @param amount The number of weeks to add.
		* @returns The new date with the weeks added.
		*/
		this.addWeeks = (date, amount) => {
			return this.overrides?.addWeeks ? this.overrides.addWeeks(date, amount) : addWeeks(date, amount);
		};
		/**
		* Adds the specified number of years to the given date.
		*
		* @param date The date to add years to.
		* @param amount The number of years to add.
		* @returns The new date with the years added.
		*/
		this.addYears = (date, amount) => {
			return this.overrides?.addYears ? this.overrides.addYears(date, amount) : addYears(date, amount);
		};
		/**
		* Returns the number of calendar days between the given dates.
		*
		* @param dateLeft The later date.
		* @param dateRight The earlier date.
		* @returns The number of calendar days between the dates.
		*/
		this.differenceInCalendarDays = (dateLeft, dateRight) => {
			return this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(dateLeft, dateRight) : differenceInCalendarDays(dateLeft, dateRight);
		};
		/**
		* Returns the number of calendar months between the given dates.
		*
		* @param dateLeft The later date.
		* @param dateRight The earlier date.
		* @returns The number of calendar months between the dates.
		*/
		this.differenceInCalendarMonths = (dateLeft, dateRight) => {
			return this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(dateLeft, dateRight) : differenceInCalendarMonths(dateLeft, dateRight);
		};
		/**
		* Returns the months between the given dates.
		*
		* @param interval The interval to get the months for.
		*/
		this.eachMonthOfInterval = (interval) => {
			return this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(interval) : eachMonthOfInterval(interval);
		};
		/**
		* Returns the years between the given dates.
		*
		* @since 9.11.1
		* @param interval The interval to get the years for.
		* @returns The array of years in the interval.
		*/
		this.eachYearOfInterval = (interval) => {
			const years = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(interval) : eachYearOfInterval(interval);
			const uniqueYears = new Set(years.map((d) => this.getYear(d)));
			if (uniqueYears.size === years.length) return years;
			const yearsArray = [];
			uniqueYears.forEach((y) => {
				yearsArray.push(new Date(y, 0, 1));
			});
			return yearsArray;
		};
		/**
		* Returns the end of the broadcast week for the given date.
		*
		* @param date The original date.
		* @returns The end of the broadcast week.
		*/
		this.endOfBroadcastWeek = (date) => {
			return this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(date) : endOfBroadcastWeek(date, this);
		};
		/**
		* Returns the end of the ISO week for the given date.
		*
		* @param date The original date.
		* @returns The end of the ISO week.
		*/
		this.endOfISOWeek = (date) => {
			return this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(date) : endOfISOWeek(date);
		};
		/**
		* Returns the end of the month for the given date.
		*
		* @param date The original date.
		* @returns The end of the month.
		*/
		this.endOfMonth = (date) => {
			return this.overrides?.endOfMonth ? this.overrides.endOfMonth(date) : endOfMonth(date);
		};
		/**
		* Returns the end of the week for the given date.
		*
		* @param date The original date.
		* @returns The end of the week.
		*/
		this.endOfWeek = (date, options) => {
			return this.overrides?.endOfWeek ? this.overrides.endOfWeek(date, options) : endOfWeek(date, this.options);
		};
		/**
		* Returns the end of the year for the given date.
		*
		* @param date The original date.
		* @returns The end of the year.
		*/
		this.endOfYear = (date) => {
			return this.overrides?.endOfYear ? this.overrides.endOfYear(date) : endOfYear(date);
		};
		/**
		* Formats the given date using the specified format string.
		*
		* @param date The date to format.
		* @param formatStr The format string.
		* @returns The formatted date string.
		*/
		this.format = (date, formatStr, _options) => {
			const formatted = this.overrides?.format ? this.overrides.format(date, formatStr, this.options) : format(date, formatStr, this.options);
			if (this.options.numerals && this.options.numerals !== "latn") return this.replaceDigits(formatted);
			return formatted;
		};
		/**
		* Returns the ISO week number for the given date.
		*
		* @param date The date to get the ISO week number for.
		* @returns The ISO week number.
		*/
		this.getISOWeek = (date) => {
			return this.overrides?.getISOWeek ? this.overrides.getISOWeek(date) : getISOWeek(date);
		};
		/**
		* Returns the month of the given date.
		*
		* @param date The date to get the month for.
		* @returns The month.
		*/
		this.getMonth = (date, _options) => {
			return this.overrides?.getMonth ? this.overrides.getMonth(date, this.options) : getMonth(date, this.options);
		};
		/**
		* Returns the year of the given date.
		*
		* @param date The date to get the year for.
		* @returns The year.
		*/
		this.getYear = (date, _options) => {
			return this.overrides?.getYear ? this.overrides.getYear(date, this.options) : getYear(date, this.options);
		};
		/**
		* Returns the local week number for the given date.
		*
		* @param date The date to get the week number for.
		* @returns The week number.
		*/
		this.getWeek = (date, _options) => {
			return this.overrides?.getWeek ? this.overrides.getWeek(date, this.options) : getWeek(date, this.options);
		};
		/**
		* Checks if the first date is after the second date.
		*
		* @param date The date to compare.
		* @param dateToCompare The date to compare with.
		* @returns True if the first date is after the second date.
		*/
		this.isAfter = (date, dateToCompare) => {
			return this.overrides?.isAfter ? this.overrides.isAfter(date, dateToCompare) : isAfter(date, dateToCompare);
		};
		/**
		* Checks if the first date is before the second date.
		*
		* @param date The date to compare.
		* @param dateToCompare The date to compare with.
		* @returns True if the first date is before the second date.
		*/
		this.isBefore = (date, dateToCompare) => {
			return this.overrides?.isBefore ? this.overrides.isBefore(date, dateToCompare) : isBefore(date, dateToCompare);
		};
		/**
		* Checks if the given value is a Date object.
		*
		* @param value The value to check.
		* @returns True if the value is a Date object.
		*/
		this.isDate = (value) => {
			return this.overrides?.isDate ? this.overrides.isDate(value) : isDate(value);
		};
		/**
		* Checks if the given dates are on the same day.
		*
		* @param dateLeft The first date to compare.
		* @param dateRight The second date to compare.
		* @returns True if the dates are on the same day.
		*/
		this.isSameDay = (dateLeft, dateRight) => {
			return this.overrides?.isSameDay ? this.overrides.isSameDay(dateLeft, dateRight) : isSameDay(dateLeft, dateRight);
		};
		/**
		* Checks if the given dates are in the same month.
		*
		* @param dateLeft The first date to compare.
		* @param dateRight The second date to compare.
		* @returns True if the dates are in the same month.
		*/
		this.isSameMonth = (dateLeft, dateRight) => {
			return this.overrides?.isSameMonth ? this.overrides.isSameMonth(dateLeft, dateRight) : isSameMonth(dateLeft, dateRight);
		};
		/**
		* Checks if the given dates are in the same year.
		*
		* @param dateLeft The first date to compare.
		* @param dateRight The second date to compare.
		* @returns True if the dates are in the same year.
		*/
		this.isSameYear = (dateLeft, dateRight) => {
			return this.overrides?.isSameYear ? this.overrides.isSameYear(dateLeft, dateRight) : isSameYear(dateLeft, dateRight);
		};
		/**
		* Returns the latest date in the given array of dates.
		*
		* @param dates The array of dates to compare.
		* @returns The latest date.
		*/
		this.max = (dates) => {
			return this.overrides?.max ? this.overrides.max(dates) : max(dates);
		};
		/**
		* Returns the earliest date in the given array of dates.
		*
		* @param dates The array of dates to compare.
		* @returns The earliest date.
		*/
		this.min = (dates) => {
			return this.overrides?.min ? this.overrides.min(dates) : min(dates);
		};
		/**
		* Sets the month of the given date.
		*
		* @param date The date to set the month on.
		* @param month The month to set (0-11).
		* @returns The new date with the month set.
		*/
		this.setMonth = (date, month) => {
			return this.overrides?.setMonth ? this.overrides.setMonth(date, month) : setMonth(date, month);
		};
		/**
		* Sets the year of the given date.
		*
		* @param date The date to set the year on.
		* @param year The year to set.
		* @returns The new date with the year set.
		*/
		this.setYear = (date, year) => {
			return this.overrides?.setYear ? this.overrides.setYear(date, year) : setYear(date, year);
		};
		/**
		* Returns the start of the broadcast week for the given date.
		*
		* @param date The original date.
		* @returns The start of the broadcast week.
		*/
		this.startOfBroadcastWeek = (date, _dateLib) => {
			return this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(date, this) : startOfBroadcastWeek(date, this);
		};
		/**
		* Returns the start of the day for the given date.
		*
		* @param date The original date.
		* @returns The start of the day.
		*/
		this.startOfDay = (date) => {
			return this.overrides?.startOfDay ? this.overrides.startOfDay(date) : startOfDay(date);
		};
		/**
		* Returns the start of the ISO week for the given date.
		*
		* @param date The original date.
		* @returns The start of the ISO week.
		*/
		this.startOfISOWeek = (date) => {
			return this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(date) : startOfISOWeek(date);
		};
		/**
		* Returns the start of the month for the given date.
		*
		* @param date The original date.
		* @returns The start of the month.
		*/
		this.startOfMonth = (date) => {
			return this.overrides?.startOfMonth ? this.overrides.startOfMonth(date) : startOfMonth(date);
		};
		/**
		* Returns the start of the week for the given date.
		*
		* @param date The original date.
		* @returns The start of the week.
		*/
		this.startOfWeek = (date, _options) => {
			return this.overrides?.startOfWeek ? this.overrides.startOfWeek(date, this.options) : startOfWeek(date, this.options);
		};
		/**
		* Returns the start of the year for the given date.
		*
		* @param date The original date.
		* @returns The start of the year.
		*/
		this.startOfYear = (date) => {
			return this.overrides?.startOfYear ? this.overrides.startOfYear(date) : startOfYear(date);
		};
		this.options = {
			locale: enUS,
			...options
		};
		this.overrides = overrides;
	}
	/**
	* Generates a mapping of Arabic digits (0-9) to the target numbering system
	* digits.
	*
	* @since 9.5.0
	* @returns A record mapping Arabic digits to the target numerals.
	*/
	getDigitMap() {
		const { numerals = "latn" } = this.options;
		const formatter = new Intl.NumberFormat("en-US", { numberingSystem: numerals });
		const digitMap = {};
		for (let i = 0; i < 10; i++) digitMap[i.toString()] = formatter.format(i);
		return digitMap;
	}
	/**
	* Replaces Arabic digits in a string with the target numbering system digits.
	*
	* @since 9.5.0
	* @param input The string containing Arabic digits.
	* @returns The string with digits replaced.
	*/
	replaceDigits(input) {
		const digitMap = this.getDigitMap();
		return input.replace(/\d/g, (digit) => digitMap[digit] || digit);
	}
	/**
	* Formats a number using the configured numbering system.
	*
	* @since 9.5.0
	* @param value The number to format.
	* @returns The formatted number as a string.
	*/
	formatNumber(value) {
		return this.replaceDigits(value.toString());
	}
	/**
	* Returns the preferred ordering for month and year labels for the current
	* locale.
	*/
	getMonthYearOrder() {
		const code = this.options.locale?.code;
		if (!code) return "month-first";
		return DateLib.yearFirstLocales.has(code) ? "year-first" : "month-first";
	}
	/**
	* Formats the month/year pair respecting locale conventions.
	*
	* @since 9.11.0
	*/
	formatMonthYear(date) {
		const { locale, timeZone, numerals } = this.options;
		const localeCode = locale?.code;
		if (localeCode && DateLib.yearFirstLocales.has(localeCode)) try {
			return new Intl.DateTimeFormat(localeCode, {
				month: "long",
				year: "numeric",
				timeZone,
				numberingSystem: numerals
			}).format(date);
		} catch {}
		const pattern = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(date, pattern);
	}
};
DateLib.yearFirstLocales = new Set([
	"eu",
	"hu",
	"ja",
	"ja-Hira",
	"ja-JP",
	"ko",
	"ko-KR",
	"lt",
	"lt-LT",
	"lv",
	"lv-LV",
	"mn",
	"mn-MN",
	"zh",
	"zh-CN",
	"zh-HK",
	"zh-TW"
]);
/**
* The default date library with English locale.
*
* @since 9.2.0
*/
var defaultDateLib = new DateLib();
//#endregion
//#region node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
* Represents a day displayed in the calendar.
*
* In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
* provides additional information about the day, such as whether it belongs to
* the displayed month.
*/
var CalendarDay = class {
	constructor(date, displayMonth, dateLib = defaultDateLib) {
		this.date = date;
		this.displayMonth = displayMonth;
		this.outside = Boolean(displayMonth && !dateLib.isSameMonth(date, displayMonth));
		this.dateLib = dateLib;
		this.isoDate = dateLib.format(date, "yyyy-MM-dd");
		this.displayMonthId = dateLib.format(displayMonth, "yyyy-MM");
		this.dateMonthId = dateLib.format(date, "yyyy-MM");
	}
	/**
	* Checks if this day is equal to another `CalendarDay`, considering both the
	* date and the displayed month.
	*
	* @param day The `CalendarDay` to compare with.
	* @returns `true` if the days are equal, otherwise `false`.
	*/
	isEqualTo(day) {
		return this.dateLib.isSameDay(day.date, this.date) && this.dateLib.isSameMonth(day.displayMonth, this.displayMonth);
	}
};
//#endregion
//#region node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
* Represents a month in a calendar year.
*
* A `CalendarMonth` contains the weeks within the month and the date of the
* month.
*/
var CalendarMonth = class {
	constructor(month, weeks) {
		this.date = month;
		this.weeks = weeks;
	}
};
//#endregion
//#region node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
/**
* Represents a week in a calendar month.
*
* A `CalendarWeek` contains the days within the week and the week number.
*/
var CalendarWeek = class {
	constructor(weekNumber, days) {
		this.days = days;
		this.weekNumber = weekNumber;
	}
};
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Button.js
/**
* Render the button elements in the calendar.
*
* @private
* @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
*/
function Button$1(props) {
	return React.createElement("button", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
* Render the label in the month caption.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function CaptionLabel(props) {
	return React.createElement("span", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
* Render the chevron icon used in the navigation buttons and dropdowns.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Chevron(props) {
	const { size = 24, orientation = "left", className } = props;
	return React.createElement("svg", {
		className,
		width: size,
		height: size,
		viewBox: "0 0 24 24"
	}, orientation === "up" && React.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), orientation === "down" && React.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), orientation === "left" && React.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), orientation === "right" && React.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Day.js
/**
* Render a grid cell for a specific day in the calendar.
*
* Handles interaction and focus for the day. If you only need to change the
* content of the day cell, consider swapping the `DayButton` component
* instead.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Day(props) {
	const { day, modifiers, ...tdProps } = props;
	return React.createElement("td", { ...tdProps });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
* Render a button for a specific day in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function DayButton(props) {
	const { day, modifiers, ...buttonProps } = props;
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return React.createElement("button", {
		ref,
		...buttonProps
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/UI.js
/**
* Enum representing the UI elements composing DayPicker. These elements are
* mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
*
* Some elements are extended by flags and modifiers.
*/
var UI;
(function(UI) {
	/** The root component displaying the months and the navigation bar. */
	UI["Root"] = "root";
	/** The Chevron SVG element used by navigation buttons and dropdowns. */
	UI["Chevron"] = "chevron";
	/**
	* The grid cell with the day's date. Extended by {@link DayFlag} and
	* {@link SelectionState}.
	*/
	UI["Day"] = "day";
	/** The button containing the formatted day's date, inside the grid cell. */
	UI["DayButton"] = "day_button";
	/** The caption label of the month (when not showing the dropdown navigation). */
	UI["CaptionLabel"] = "caption_label";
	/** The container of the dropdown navigation (when enabled). */
	UI["Dropdowns"] = "dropdowns";
	/** The dropdown element to select for years and months. */
	UI["Dropdown"] = "dropdown";
	/** The container element of the dropdown. */
	UI["DropdownRoot"] = "dropdown_root";
	/** The root element of the footer. */
	UI["Footer"] = "footer";
	/** The month grid. */
	UI["MonthGrid"] = "month_grid";
	/** Contains the dropdown navigation or the caption label. */
	UI["MonthCaption"] = "month_caption";
	/** The dropdown with the months. */
	UI["MonthsDropdown"] = "months_dropdown";
	/** Wrapper of the month grid. */
	UI["Month"] = "month";
	/** The container of the displayed months. */
	UI["Months"] = "months";
	/** The navigation bar with the previous and next buttons. */
	UI["Nav"] = "nav";
	/**
	* The next month button in the navigation. *
	*
	* @since 9.1.0
	*/
	UI["NextMonthButton"] = "button_next";
	/**
	* The previous month button in the navigation.
	*
	* @since 9.1.0
	*/
	UI["PreviousMonthButton"] = "button_previous";
	/** The row containing the week. */
	UI["Week"] = "week";
	/** The group of row weeks in a month (`tbody`). */
	UI["Weeks"] = "weeks";
	/** The column header with the weekday. */
	UI["Weekday"] = "weekday";
	/** The row grouping the weekdays in the column headers. */
	UI["Weekdays"] = "weekdays";
	/** The cell containing the week number. */
	UI["WeekNumber"] = "week_number";
	/** The cell header of the week numbers column. */
	UI["WeekNumberHeader"] = "week_number_header";
	/** The dropdown with the years. */
	UI["YearsDropdown"] = "years_dropdown";
})(UI || (UI = {}));
/** Enum representing flags for the {@link UI | UI.Day} element. */
var DayFlag;
(function(DayFlag) {
	/** The day is disabled. */
	DayFlag["disabled"] = "disabled";
	/** The day is hidden. */
	DayFlag["hidden"] = "hidden";
	/** The day is outside the current month. */
	DayFlag["outside"] = "outside";
	/** The day is focused. */
	DayFlag["focused"] = "focused";
	/** The day is today. */
	DayFlag["today"] = "today";
})(DayFlag || (DayFlag = {}));
/**
* Enum representing selection states that can be applied to the
* {@link UI | UI.Day} element in selection mode.
*/
var SelectionState;
(function(SelectionState) {
	/** The day is at the end of a selected range. */
	SelectionState["range_end"] = "range_end";
	/** The day is at the middle of a selected range. */
	SelectionState["range_middle"] = "range_middle";
	/** The day is at the start of a selected range. */
	SelectionState["range_start"] = "range_start";
	/** The day is selected. */
	SelectionState["selected"] = "selected";
})(SelectionState || (SelectionState = {}));
/**
* Enum representing different animation states for transitioning between
* months.
*/
var Animation;
(function(Animation) {
	/** The entering weeks when they appear before the exiting month. */
	Animation["weeks_before_enter"] = "weeks_before_enter";
	/** The exiting weeks when they disappear before the entering month. */
	Animation["weeks_before_exit"] = "weeks_before_exit";
	/** The entering weeks when they appear after the exiting month. */
	Animation["weeks_after_enter"] = "weeks_after_enter";
	/** The exiting weeks when they disappear after the entering month. */
	Animation["weeks_after_exit"] = "weeks_after_exit";
	/** The entering caption when it appears after the exiting month. */
	Animation["caption_after_enter"] = "caption_after_enter";
	/** The exiting caption when it disappears after the entering month. */
	Animation["caption_after_exit"] = "caption_after_exit";
	/** The entering caption when it appears before the exiting month. */
	Animation["caption_before_enter"] = "caption_before_enter";
	/** The exiting caption when it disappears before the entering month. */
	Animation["caption_before_exit"] = "caption_before_exit";
})(Animation || (Animation = {}));
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
* Render a dropdown component for navigation in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Dropdown(props) {
	const { options, className, components, classNames, ...selectProps } = props;
	const cssClassSelect = [classNames[UI.Dropdown], className].join(" ");
	const selectedOption = options?.find(({ value }) => value === selectProps.value);
	return React.createElement("span", {
		"data-disabled": selectProps.disabled,
		className: classNames[UI.DropdownRoot]
	}, React.createElement(components.Select, {
		className: cssClassSelect,
		...selectProps
	}, options?.map(({ value, label, disabled }) => React.createElement(components.Option, {
		key: value,
		value,
		disabled
	}, label))), React.createElement("span", {
		className: classNames[UI.CaptionLabel],
		"aria-hidden": true
	}, selectedOption?.label, React.createElement(components.Chevron, {
		orientation: "down",
		size: 18,
		className: classNames[UI.Chevron]
	})));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
* Render the navigation dropdowns for the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function DropdownNav(props) {
	return React.createElement("div", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Footer.js
/**
* Render the footer of the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Footer(props) {
	return React.createElement("div", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Month.js
/**
* Render the grid with the weekday header row and the weeks for a specific
* month.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Month(props) {
	const { calendarMonth, displayIndex, ...divProps } = props;
	return React.createElement("div", { ...divProps }, props.children);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
* Render the caption for a month in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function MonthCaption(props) {
	const { calendarMonth, displayIndex, ...divProps } = props;
	return React.createElement("div", { ...divProps });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
* Render the grid of days for a specific month.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function MonthGrid(props) {
	return React.createElement("table", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Months.js
/**
* Render a container wrapping the month grids.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Months(props) {
	return React.createElement("div", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */
var dayPickerContext = createContext(void 0);
/**
* Provides access to the DayPicker context, which includes properties and
* methods to interact with the DayPicker component. This hook must be used
* within a custom component.
*
* @template T - Use this type to refine the returned context type with a
*   specific selection mode.
* @returns The context to work with DayPicker.
* @throws {Error} If the hook is used outside of a DayPicker provider.
* @group Hooks
* @see https://daypicker.dev/guides/custom-components
*/
function useDayPicker() {
	const context = useContext(dayPickerContext);
	if (context === void 0) throw new Error("useDayPicker() must be used within a custom component.");
	return context;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
* Render a dropdown to navigate between months in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function MonthsDropdown(props) {
	const { components } = useDayPicker();
	return React.createElement(components.Dropdown, { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Nav.js
/**
* Render the navigation toolbar with buttons to navigate between months.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Nav(props) {
	const { onPreviousClick, onNextClick, previousMonth, nextMonth, ...navProps } = props;
	const { components, classNames, labels: { labelPrevious, labelNext } } = useDayPicker();
	const handleNextClick = useCallback((e) => {
		if (nextMonth) onNextClick?.(e);
	}, [nextMonth, onNextClick]);
	const handlePreviousClick = useCallback((e) => {
		if (previousMonth) onPreviousClick?.(e);
	}, [previousMonth, onPreviousClick]);
	return React.createElement("nav", { ...navProps }, React.createElement(components.PreviousMonthButton, {
		type: "button",
		className: classNames[UI.PreviousMonthButton],
		tabIndex: previousMonth ? void 0 : -1,
		"aria-disabled": previousMonth ? void 0 : true,
		"aria-label": labelPrevious(previousMonth),
		onClick: handlePreviousClick
	}, React.createElement(components.Chevron, {
		disabled: previousMonth ? void 0 : true,
		className: classNames[UI.Chevron],
		orientation: "left"
	})), React.createElement(components.NextMonthButton, {
		type: "button",
		className: classNames[UI.NextMonthButton],
		tabIndex: nextMonth ? void 0 : -1,
		"aria-disabled": nextMonth ? void 0 : true,
		"aria-label": labelNext(nextMonth),
		onClick: handleNextClick
	}, React.createElement(components.Chevron, {
		disabled: nextMonth ? void 0 : true,
		orientation: "right",
		className: classNames[UI.Chevron]
	})));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
* Render the button to navigate to the next month in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function NextMonthButton(props) {
	const { components } = useDayPicker();
	return React.createElement(components.Button, { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Option.js
/**
* Render an `option` element.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Option(props) {
	return React.createElement("option", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
* Render the button to navigate to the previous month in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function PreviousMonthButton(props) {
	const { components } = useDayPicker();
	return React.createElement(components.Button, { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Root.js
/**
* Render the root element of the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Root(props) {
	const { rootRef, ...rest } = props;
	return React.createElement("div", {
		...rest,
		ref: rootRef
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Select.js
/**
* Render a `select` element.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Select$2(props) {
	return React.createElement("select", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Week.js
/**
* Render a table row representing a week in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Week(props) {
	const { week, ...trProps } = props;
	return React.createElement("tr", { ...trProps });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
* Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Weekday(props) {
	return React.createElement("th", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
* Render the table row containing the weekday names.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Weekdays(props) {
	return React.createElement("thead", { "aria-hidden": true }, React.createElement("tr", { ...props }));
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
* Render a table cell displaying the number of the week.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function WeekNumber(props) {
	const { week, ...thProps } = props;
	return React.createElement("th", { ...thProps });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
* Render the header cell for the week numbers column.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function WeekNumberHeader(props) {
	return React.createElement("th", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
* Render the container for the weeks in the month grid.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function Weeks(props) {
	return React.createElement("tbody", { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
* Render a dropdown to navigate between years in the calendar.
*
* @group Components
* @see https://daypicker.dev/guides/custom-components
*/
function YearsDropdown(props) {
	const { components } = useDayPicker();
	return React.createElement(components.Dropdown, { ...props });
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/components/custom-components.js
var custom_components_exports = /* @__PURE__ */ __exportAll({
	Button: () => Button$1,
	CaptionLabel: () => CaptionLabel,
	Chevron: () => Chevron,
	Day: () => Day,
	DayButton: () => DayButton,
	Dropdown: () => Dropdown,
	DropdownNav: () => DropdownNav,
	Footer: () => Footer,
	Month: () => Month,
	MonthCaption: () => MonthCaption,
	MonthGrid: () => MonthGrid,
	Months: () => Months,
	MonthsDropdown: () => MonthsDropdown,
	Nav: () => Nav,
	NextMonthButton: () => NextMonthButton,
	Option: () => Option,
	PreviousMonthButton: () => PreviousMonthButton,
	Root: () => Root,
	Select: () => Select$2,
	Week: () => Week,
	WeekNumber: () => WeekNumber,
	WeekNumberHeader: () => WeekNumberHeader,
	Weekday: () => Weekday,
	Weekdays: () => Weekdays,
	Weeks: () => Weeks,
	YearsDropdown: () => YearsDropdown
});
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
/**
* Checks if a given date is within a specified date range.
*
* @since 9.0.0
* @param range - The date range to check against.
* @param date - The date to check.
* @param excludeEnds - If `true`, the range's start and end dates are excluded.
* @param dateLib - The date utility library instance.
* @returns `true` if the date is within the range, otherwise `false`.
* @group Utilities
*/
function rangeIncludesDate(range, date, excludeEnds = false, dateLib = defaultDateLib) {
	let { from, to } = range;
	const { differenceInCalendarDays, isSameDay } = dateLib;
	if (from && to) {
		if (differenceInCalendarDays(to, from) < 0) [from, to] = [to, from];
		return differenceInCalendarDays(date, from) >= (excludeEnds ? 1 : 0) && differenceInCalendarDays(to, date) >= (excludeEnds ? 1 : 0);
	}
	if (!excludeEnds && to) return isSameDay(to, date);
	if (!excludeEnds && from) return isSameDay(from, date);
	return false;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
* Checks if the given value is of type {@link DateInterval}.
*
* @param matcher - The value to check.
* @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
* @group Utilities
*/
function isDateInterval(matcher) {
	return Boolean(matcher && typeof matcher === "object" && "before" in matcher && "after" in matcher);
}
/**
* Checks if the given value is of type {@link DateRange}.
*
* @param value - The value to check.
* @returns `true` if the value is a {@link DateRange}, otherwise `false`.
* @group Utilities
*/
function isDateRange(value) {
	return Boolean(value && typeof value === "object" && "from" in value);
}
/**
* Checks if the given value is of type {@link DateAfter}.
*
* @param value - The value to check.
* @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
* @group Utilities
*/
function isDateAfterType(value) {
	return Boolean(value && typeof value === "object" && "after" in value);
}
/**
* Checks if the given value is of type {@link DateBefore}.
*
* @param value - The value to check.
* @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
* @group Utilities
*/
function isDateBeforeType(value) {
	return Boolean(value && typeof value === "object" && "before" in value);
}
/**
* Checks if the given value is of type {@link DayOfWeek}.
*
* @param value - The value to check.
* @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
* @group Utilities
*/
function isDayOfWeekType(value) {
	return Boolean(value && typeof value === "object" && "dayOfWeek" in value);
}
/**
* Checks if the given value is an array of valid dates.
*
* @private
* @param value - The value to check.
* @param dateLib - The date utility library instance.
* @returns `true` if the value is an array of valid dates, otherwise `false`.
*/
function isDatesArray(value, dateLib) {
	return Array.isArray(value) && value.every(dateLib.isDate);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
* Checks if a given date matches at least one of the specified {@link Matcher}.
*
* @param date - The date to check.
* @param matchers - The matchers to check against.
* @param dateLib - The date utility library instance.
* @returns `true` if the date matches any of the matchers, otherwise `false`.
* @group Utilities
*/
function dateMatchModifiers(date, matchers, dateLib = defaultDateLib) {
	const matchersArr = !Array.isArray(matchers) ? [matchers] : matchers;
	const { isSameDay, differenceInCalendarDays, isAfter } = dateLib;
	return matchersArr.some((matcher) => {
		if (typeof matcher === "boolean") return matcher;
		if (dateLib.isDate(matcher)) return isSameDay(date, matcher);
		if (isDatesArray(matcher, dateLib)) return matcher.some((matcherDate) => isSameDay(date, matcherDate));
		if (isDateRange(matcher)) return rangeIncludesDate(matcher, date, false, dateLib);
		if (isDayOfWeekType(matcher)) {
			if (!Array.isArray(matcher.dayOfWeek)) return matcher.dayOfWeek === date.getDay();
			return matcher.dayOfWeek.includes(date.getDay());
		}
		if (isDateInterval(matcher)) {
			const diffBefore = differenceInCalendarDays(matcher.before, date);
			const diffAfter = differenceInCalendarDays(matcher.after, date);
			const isDayBefore = diffBefore > 0;
			const isDayAfter = diffAfter < 0;
			if (isAfter(matcher.before, matcher.after)) return isDayAfter && isDayBefore;
			else return isDayBefore || isDayAfter;
		}
		if (isDateAfterType(matcher)) return differenceInCalendarDays(date, matcher.after) > 0;
		if (isDateBeforeType(matcher)) return differenceInCalendarDays(matcher.before, date) > 0;
		if (typeof matcher === "function") return matcher(date);
		return false;
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
/**
* Creates a function to retrieve the modifiers for a given day.
*
* This function calculates both internal and custom modifiers for each day
* based on the provided calendar days and DayPicker props.
*
* @private
* @param days The array of `CalendarDay` objects to process.
* @param props The DayPicker props, including modifiers and configuration
*   options.
* @param dateLib The date library to use for date manipulation.
* @returns A function that retrieves the modifiers for a given `CalendarDay`.
*/
function createGetModifiers(days, props, navStart, navEnd, dateLib) {
	const { disabled, hidden, modifiers, showOutsideDays, broadcastCalendar, today = dateLib.today() } = props;
	const { isSameDay, isSameMonth, startOfMonth, isBefore, endOfMonth, isAfter } = dateLib;
	const computedNavStart = navStart && startOfMonth(navStart);
	const computedNavEnd = navEnd && endOfMonth(navEnd);
	const internalModifiersMap = {
		[DayFlag.focused]: [],
		[DayFlag.outside]: [],
		[DayFlag.disabled]: [],
		[DayFlag.hidden]: [],
		[DayFlag.today]: []
	};
	const customModifiersMap = {};
	for (const day of days) {
		const { date, displayMonth } = day;
		const isOutside = Boolean(displayMonth && !isSameMonth(date, displayMonth));
		const isBeforeNavStart = Boolean(computedNavStart && isBefore(date, computedNavStart));
		const isAfterNavEnd = Boolean(computedNavEnd && isAfter(date, computedNavEnd));
		const isDisabled = Boolean(disabled && dateMatchModifiers(date, disabled, dateLib));
		const isHidden = Boolean(hidden && dateMatchModifiers(date, hidden, dateLib)) || isBeforeNavStart || isAfterNavEnd || !broadcastCalendar && !showOutsideDays && isOutside || broadcastCalendar && showOutsideDays === false && isOutside;
		const isToday = isSameDay(date, today);
		if (isOutside) internalModifiersMap.outside.push(day);
		if (isDisabled) internalModifiersMap.disabled.push(day);
		if (isHidden) internalModifiersMap.hidden.push(day);
		if (isToday) internalModifiersMap.today.push(day);
		if (modifiers) Object.keys(modifiers).forEach((name) => {
			const modifierValue = modifiers?.[name];
			if (!(modifierValue ? dateMatchModifiers(date, modifierValue, dateLib) : false)) return;
			if (customModifiersMap[name]) customModifiersMap[name].push(day);
			else customModifiersMap[name] = [day];
		});
	}
	return (day) => {
		const dayFlags = {
			[DayFlag.focused]: false,
			[DayFlag.disabled]: false,
			[DayFlag.hidden]: false,
			[DayFlag.outside]: false,
			[DayFlag.today]: false
		};
		const customModifiers = {};
		for (const name in internalModifiersMap) dayFlags[name] = internalModifiersMap[name].some((d) => d === day);
		for (const name in customModifiersMap) customModifiers[name] = customModifiersMap[name].some((d) => d === day);
		return {
			...dayFlags,
			...customModifiers
		};
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
/**
* Returns the class names for a day based on its modifiers.
*
* This function combines the base class name for the day with any class names
* associated with active modifiers.
*
* @param modifiers The modifiers applied to the day.
* @param classNames The base class names for the calendar elements.
* @param modifiersClassNames The class names associated with specific
*   modifiers.
* @returns An array of class names for the day.
*/
function getClassNamesForModifiers(modifiers, classNames, modifiersClassNames = {}) {
	return Object.entries(modifiers).filter(([, active]) => active === true).reduce((previousValue, [key]) => {
		if (modifiersClassNames[key]) previousValue.push(modifiersClassNames[key]);
		else if (classNames[DayFlag[key]]) previousValue.push(classNames[DayFlag[key]]);
		else if (classNames[SelectionState[key]]) previousValue.push(classNames[SelectionState[key]]);
		return previousValue;
	}, [classNames[UI.Day]]);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getComponents.js
/**
* Merges custom components from the props with the default components.
*
* This function ensures that any custom components provided in the props
* override the default components.
*
* @param customComponents The custom components provided in the DayPicker
*   props.
* @returns An object containing the merged components.
*/
function getComponents(customComponents) {
	return {
		...custom_components_exports,
		...customComponents
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
* Extracts `data-` attributes from the DayPicker props.
*
* This function collects all `data-` attributes from the props and adds
* additional attributes based on the DayPicker configuration.
*
* @param props The DayPicker props.
* @returns An object containing the `data-` attributes.
*/
function getDataAttributes(props) {
	const dataAttributes = {
		"data-mode": props.mode ?? void 0,
		"data-required": "required" in props ? props.required : void 0,
		"data-multiple-months": props.numberOfMonths && props.numberOfMonths > 1 || void 0,
		"data-week-numbers": props.showWeekNumber || void 0,
		"data-broadcast-calendar": props.broadcastCalendar || void 0,
		"data-nav-layout": props.navLayout || void 0
	};
	Object.entries(props).forEach(([key, val]) => {
		if (key.startsWith("data-")) dataAttributes[key] = val;
	});
	return dataAttributes;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
* Returns the default class names for the UI elements.
*
* This function generates a mapping of default class names for various UI
* elements, day flags, selection states, and animations.
*
* @returns An object containing the default class names.
* @group Utilities
*/
function getDefaultClassNames() {
	const classNames = {};
	for (const key in UI) classNames[UI[key]] = `rdp-${UI[key]}`;
	for (const key in DayFlag) classNames[DayFlag[key]] = `rdp-${DayFlag[key]}`;
	for (const key in SelectionState) classNames[SelectionState[key]] = `rdp-${SelectionState[key]}`;
	for (const key in Animation) classNames[Animation[key]] = `rdp-${Animation[key]}`;
	return classNames;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
/**
* Formats the caption of the month.
*
* @defaultValue Locale-specific month/year order (e.g., "November 2022").
* @param month The date representing the month.
* @param options Configuration options for the date library.
* @param dateLib The date library to use for formatting. If not provided, a new
*   instance is created.
* @returns The formatted caption as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatCaption(month, options, dateLib) {
	return (dateLib ?? new DateLib(options)).formatMonthYear(month);
}
/**
* @private
* @deprecated Use {@link formatCaption} instead.
* @group Formatters
*/
var formatMonthCaption = formatCaption;
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatDay.js
/**
* Formats the day date shown in the day cell.
*
* @defaultValue `d` (e.g., "1").
* @param date The date to format.
* @param options Configuration options for the date library.
* @param dateLib The date library to use for formatting. If not provided, a new
*   instance is created.
* @returns The formatted day as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatDay(date, options, dateLib) {
	return (dateLib ?? new DateLib(options)).format(date, "d");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
/**
* Formats the month for the dropdown option label.
*
* @defaultValue The localized full month name.
* @param month The date representing the month.
* @param dateLib The date library to use for formatting. Defaults to
*   `defaultDateLib`.
* @returns The formatted month name as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatMonthDropdown(month, dateLib = defaultDateLib) {
	return dateLib.format(month, "LLLL");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
/**
* Formats the name of a weekday to be displayed in the weekdays header.
*
* @defaultValue `cccccc` (e.g., "Mo" for Monday).
* @param weekday The date representing the weekday.
* @param options Configuration options for the date library.
* @param dateLib The date library to use for formatting. If not provided, a new
*   instance is created.
* @returns The formatted weekday name as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatWeekdayName(weekday, options, dateLib) {
	return (dateLib ?? new DateLib(options)).format(weekday, "cccccc");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
/**
* Formats the week number.
*
* @defaultValue The week number as a string, with a leading zero for single-digit numbers.
* @param weekNumber The week number to format.
* @param dateLib The date library to use for formatting. Defaults to
*   `defaultDateLib`.
* @returns The formatted week number as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatWeekNumber(weekNumber, dateLib = defaultDateLib) {
	if (weekNumber < 10) return dateLib.formatNumber(`0${weekNumber.toLocaleString()}`);
	return dateLib.formatNumber(`${weekNumber.toLocaleString()}`);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
* Formats the header for the week number column.
*
* @defaultValue An empty string `""`.
* @returns The formatted week number header as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatWeekNumberHeader() {
	return ``;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
* Formats the year for the dropdown option label.
*
* @param year The year to format.
* @param dateLib The date library to use for formatting. Defaults to
*   `defaultDateLib`.
* @returns The formatted year as a string.
* @group Formatters
* @see https://daypicker.dev/docs/translation#custom-formatters
*/
function formatYearDropdown(year, dateLib = defaultDateLib) {
	return dateLib.format(year, "yyyy");
}
/**
* @private
* @deprecated Use `formatYearDropdown` instead.
* @group Formatters
*/
var formatYearCaption = formatYearDropdown;
//#endregion
//#region node_modules/react-day-picker/dist/esm/formatters/index.js
var formatters_exports = /* @__PURE__ */ __exportAll({
	formatCaption: () => formatCaption,
	formatDay: () => formatDay,
	formatMonthCaption: () => formatMonthCaption,
	formatMonthDropdown: () => formatMonthDropdown,
	formatWeekNumber: () => formatWeekNumber,
	formatWeekNumberHeader: () => formatWeekNumberHeader,
	formatWeekdayName: () => formatWeekdayName,
	formatYearCaption: () => formatYearCaption,
	formatYearDropdown: () => formatYearDropdown
});
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
* Merges custom formatters from the props with the default formatters.
*
* @param customFormatters The custom formatters provided in the DayPicker
*   props.
* @returns The merged formatters object.
*/
function getFormatters(customFormatters) {
	if (customFormatters?.formatMonthCaption && !customFormatters.formatCaption) customFormatters.formatCaption = customFormatters.formatMonthCaption;
	if (customFormatters?.formatYearCaption && !customFormatters.formatYearDropdown) customFormatters.formatYearDropdown = customFormatters.formatYearCaption;
	return {
		...formatters_exports,
		...customFormatters
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
/**
* Generates the ARIA label for a day button.
*
* Use the `modifiers` argument to provide additional context for the label,
* such as indicating if the day is "today" or "selected."
*
* @defaultValue The formatted date.
* @param date - The date to format.
* @param modifiers - The modifiers providing context for the day.
* @param options - Optional configuration for the date formatting library.
* @param dateLib - An optional instance of the date formatting library.
* @returns The ARIA label for the day button.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelDayButton(date, modifiers, options, dateLib) {
	let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
	if (modifiers.today) label = `Today, ${label}`;
	if (modifiers.selected) label = `${label}, selected`;
	return label;
}
/**
* @ignore
* @deprecated Use `labelDayButton` instead.
*/
var labelDay = labelDayButton;
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelGrid.js
/**
* Generates the ARIA label for the month grid, which is announced when entering
* the grid.
*
* @defaultValue Locale-specific month/year order (e.g., "November 2022").
* @param date - The date representing the month.
* @param options - Optional configuration for the date formatting library.
* @param dateLib - An optional instance of the date formatting library.
* @returns The ARIA label for the month grid.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelGrid(date, options, dateLib) {
	return (dateLib ?? new DateLib(options)).formatMonthYear(date);
}
/**
* @ignore
* @deprecated Use {@link labelGrid} instead.
*/
var labelCaption = labelGrid;
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
/**
* Generates the label for a day grid cell when the calendar is not interactive.
*
* @param date - The date to format.
* @param modifiers - Optional modifiers providing context for the day.
* @param options - Optional configuration for the date formatting library.
* @param dateLib - An optional instance of the date formatting library.
* @returns The label for the day grid cell.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelGridcell(date, modifiers, options, dateLib) {
	let label = (dateLib ?? new DateLib(options)).format(date, "PPPP");
	if (modifiers?.today) label = `Today, ${label}`;
	return label;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
* Generates the ARIA label for the months dropdown.
*
* @defaultValue `"Choose the Month"`
* @param options - Optional configuration for the date formatting library.
* @returns The ARIA label for the months dropdown.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelMonthDropdown(_options) {
	return "Choose the Month";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
* Generates the ARIA label for the navigation toolbar.
*
* @defaultValue `""`
* @returns The ARIA label for the navigation toolbar.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelNav() {
	return "";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelNext.js
var defaultLabel = "Go to the Next Month";
/**
* Generates the ARIA label for the "next month" button.
*
* @defaultValue `"Go to the Next Month"`
* @param month - The date representing the next month, or `undefined` if there
*   is no next month.
* @returns The ARIA label for the "next month" button.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelNext(_month, _options) {
	return defaultLabel;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
* Generates the ARIA label for the "previous month" button.
*
* @defaultValue `"Go to the Previous Month"`
* @param month - The date representing the previous month, or `undefined` if
*   there is no previous month.
* @returns The ARIA label for the "previous month" button.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelPrevious(_month) {
	return "Go to the Previous Month";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
/**
* Generates the ARIA label for a weekday column header.
*
* @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
* @param date - The date representing the weekday.
* @param options - Optional configuration for the date formatting library.
* @param dateLib - An optional instance of the date formatting library.
* @returns The ARIA label for the weekday column header.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelWeekday(date, options, dateLib) {
	return (dateLib ?? new DateLib(options)).format(date, "cccc");
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
* Generates the ARIA label for the week number cell (the first cell in a row).
*
* @defaultValue `Week ${weekNumber}`
* @param weekNumber - The number of the week.
* @param options - Optional configuration for the date formatting library.
* @returns The ARIA label for the week number cell.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelWeekNumber(weekNumber, _options) {
	return `Week ${weekNumber}`;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
* Generates the ARIA label for the week number header element.
*
* @defaultValue `"Week Number"`
* @param options - Optional configuration for the date formatting library.
* @returns The ARIA label for the week number header.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelWeekNumberHeader(_options) {
	return "Week Number";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
* Generates the ARIA label for the years dropdown.
*
* @defaultValue `"Choose the Year"`
* @param options - Optional configuration for the date formatting library.
* @returns The ARIA label for the years dropdown.
* @group Labels
* @see https://daypicker.dev/docs/translation#aria-labels
*/
function labelYearDropdown(_options) {
	return "Choose the Year";
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/labels/index.js
var labels_exports = /* @__PURE__ */ __exportAll({
	labelCaption: () => labelCaption,
	labelDay: () => labelDay,
	labelDayButton: () => labelDayButton,
	labelGrid: () => labelGrid,
	labelGridcell: () => labelGridcell,
	labelMonthDropdown: () => labelMonthDropdown,
	labelNav: () => labelNav,
	labelNext: () => labelNext,
	labelPrevious: () => labelPrevious,
	labelWeekNumber: () => labelWeekNumber,
	labelWeekNumberHeader: () => labelWeekNumberHeader,
	labelWeekday: () => labelWeekday,
	labelYearDropdown: () => labelYearDropdown
});
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getLabels.js
var resolveLabel = (defaultLabel, customLabel, localeLabel) => {
	if (customLabel) return customLabel;
	if (localeLabel) return typeof localeLabel === "function" ? localeLabel : (..._args) => localeLabel;
	return defaultLabel;
};
/**
* Merges custom labels from the props with the default labels.
*
* When available, uses the locale-provided translation for `labelNext`.
*
* @param customLabels The custom labels provided in the DayPicker props.
* @param options Options from the date library, used to resolve locale
*   translations.
* @returns The merged labels object with locale-aware defaults.
*/
function getLabels(customLabels, options) {
	const localeLabels = options.locale?.labels ?? {};
	return {
		...labels_exports,
		...customLabels ?? {},
		labelDayButton: resolveLabel(labelDayButton, customLabels?.labelDayButton, localeLabels.labelDayButton),
		labelMonthDropdown: resolveLabel(labelMonthDropdown, customLabels?.labelMonthDropdown, localeLabels.labelMonthDropdown),
		labelNext: resolveLabel(labelNext, customLabels?.labelNext, localeLabels.labelNext),
		labelPrevious: resolveLabel(labelPrevious, customLabels?.labelPrevious, localeLabels.labelPrevious),
		labelWeekNumber: resolveLabel(labelWeekNumber, customLabels?.labelWeekNumber, localeLabels.labelWeekNumber),
		labelYearDropdown: resolveLabel(labelYearDropdown, customLabels?.labelYearDropdown, localeLabels.labelYearDropdown),
		labelGrid: resolveLabel(labelGrid, customLabels?.labelGrid, localeLabels.labelGrid),
		labelGridcell: resolveLabel(labelGridcell, customLabels?.labelGridcell, localeLabels.labelGridcell),
		labelNav: resolveLabel(labelNav, customLabels?.labelNav, localeLabels.labelNav),
		labelWeekNumberHeader: resolveLabel(labelWeekNumberHeader, customLabels?.labelWeekNumberHeader, localeLabels.labelWeekNumberHeader),
		labelWeekday: resolveLabel(labelWeekday, customLabels?.labelWeekday, localeLabels.labelWeekday)
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
/**
* Returns the months to show in the dropdown.
*
* This function generates a list of months for the current year, formatted
* using the provided formatter, and determines whether each month should be
* disabled based on the navigation range.
*
* @param displayMonth The currently displayed month.
* @param navStart The start date for navigation.
* @param navEnd The end date for navigation.
* @param formatters The formatters to use for formatting the month labels.
* @param dateLib The date library to use for date manipulation.
* @returns An array of dropdown options representing the months, or `undefined`
*   if no months are available.
*/
function getMonthOptions(displayMonth, navStart, navEnd, formatters, dateLib) {
	const { startOfMonth, startOfYear, endOfYear, eachMonthOfInterval, getMonth } = dateLib;
	return eachMonthOfInterval({
		start: startOfYear(displayMonth),
		end: endOfYear(displayMonth)
	}).map((month) => {
		const label = formatters.formatMonthDropdown(month, dateLib);
		return {
			value: getMonth(month),
			label,
			disabled: navStart && month < startOfMonth(navStart) || navEnd && month > startOfMonth(navEnd) || false
		};
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
/**
* Returns the computed style for a day based on its modifiers.
*
* This function merges the base styles for the day with any styles associated
* with active modifiers.
*
* @param dayModifiers The modifiers applied to the day.
* @param styles The base styles for the calendar elements.
* @param modifiersStyles The styles associated with specific modifiers.
* @returns The computed style for the day.
*/
function getStyleForModifiers(dayModifiers, styles = {}, modifiersStyles = {}) {
	let style = { ...styles?.[UI.Day] };
	Object.entries(dayModifiers).filter(([, active]) => active === true).forEach(([modifier]) => {
		style = {
			...style,
			...modifiersStyles?.[modifier]
		};
	});
	return style;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
* Generates a series of 7 days, starting from the beginning of the week, to use
* for formatting weekday names (e.g., Monday, Tuesday, etc.).
*
* @param dateLib The date library to use for date manipulation.
* @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
* @param broadcastCalendar Whether to use the broadcast calendar (weeks start
*   on Monday, but may include adjustments for broadcast-specific rules).
* @returns An array of 7 dates representing the weekdays.
*/
function getWeekdays(dateLib, ISOWeek, broadcastCalendar, today) {
	const referenceToday = today ?? dateLib.today();
	const start = broadcastCalendar ? dateLib.startOfBroadcastWeek(referenceToday, dateLib) : ISOWeek ? dateLib.startOfISOWeek(referenceToday) : dateLib.startOfWeek(referenceToday);
	const days = [];
	for (let i = 0; i < 7; i++) {
		const day = dateLib.addDays(start, i);
		days.push(day);
	}
	return days;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
/**
* Returns the years to display in the dropdown.
*
* This function generates a list of years between the navigation start and end
* dates, formatted using the provided formatter.
*
* @param navStart The start date for navigation.
* @param navEnd The end date for navigation.
* @param formatters The formatters to use for formatting the year labels.
* @param dateLib The date library to use for date manipulation.
* @param reverse If true, reverses the order of the years (descending).
* @returns An array of dropdown options representing the years, or `undefined`
*   if `navStart` or `navEnd` is not provided.
*/
function getYearOptions(navStart, navEnd, formatters, dateLib, reverse = false) {
	if (!navStart) return void 0;
	if (!navEnd) return void 0;
	const { startOfYear, endOfYear, eachYearOfInterval, getYear } = dateLib;
	const years = eachYearOfInterval({
		start: startOfYear(navStart),
		end: endOfYear(navEnd)
	});
	if (reverse) years.reverse();
	return years.map((year) => {
		const label = formatters.formatYearDropdown(year, dateLib);
		return {
			value: getYear(year),
			label,
			disabled: false
		};
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/noonDateLib.js
/**
* Creates `dateLib` overrides that keep all calendar math at noon in the target
* time zone. This avoids second-level offset changes (e.g., historical zones
* with +03:41:12) from pushing dates backward across midnight.
*/
function createNoonOverrides(timeZone, options = {}) {
	const { weekStartsOn, locale } = options;
	const fallbackWeekStartsOn = weekStartsOn ?? locale?.options?.weekStartsOn ?? 0;
	const toNoonTZDate = (date) => {
		const normalizedDate = typeof date === "number" || typeof date === "string" ? new Date(date) : date;
		return new TZDate(normalizedDate.getFullYear(), normalizedDate.getMonth(), normalizedDate.getDate(), 12, 0, 0, timeZone);
	};
	const toCalendarDate = (date) => {
		const zoned = toNoonTZDate(date);
		return new Date(zoned.getFullYear(), zoned.getMonth(), zoned.getDate(), 0, 0, 0, 0);
	};
	return {
		today: () => {
			return toNoonTZDate(TZDate.tz(timeZone));
		},
		newDate: (year, monthIndex, date) => {
			return new TZDate(year, monthIndex, date, 12, 0, 0, timeZone);
		},
		startOfDay: (date) => {
			return toNoonTZDate(date);
		},
		startOfWeek: (date, options) => {
			const base = toNoonTZDate(date);
			const weekStartsOnValue = options?.weekStartsOn ?? fallbackWeekStartsOn;
			const diff = (base.getDay() - weekStartsOnValue + 7) % 7;
			base.setDate(base.getDate() - diff);
			return base;
		},
		startOfISOWeek: (date) => {
			const base = toNoonTZDate(date);
			const diff = (base.getDay() - 1 + 7) % 7;
			base.setDate(base.getDate() - diff);
			return base;
		},
		startOfMonth: (date) => {
			const base = toNoonTZDate(date);
			base.setDate(1);
			return base;
		},
		startOfYear: (date) => {
			const base = toNoonTZDate(date);
			base.setMonth(0, 1);
			return base;
		},
		endOfWeek: (date, options) => {
			const base = toNoonTZDate(date);
			const diff = (((options?.weekStartsOn ?? fallbackWeekStartsOn) + 6) % 7 - base.getDay() + 7) % 7;
			base.setDate(base.getDate() + diff);
			return base;
		},
		endOfISOWeek: (date) => {
			const base = toNoonTZDate(date);
			const diff = (7 - base.getDay()) % 7;
			base.setDate(base.getDate() + diff);
			return base;
		},
		endOfMonth: (date) => {
			const base = toNoonTZDate(date);
			base.setMonth(base.getMonth() + 1, 0);
			return base;
		},
		endOfYear: (date) => {
			const base = toNoonTZDate(date);
			base.setMonth(11, 31);
			return base;
		},
		eachMonthOfInterval: (interval) => {
			const start = toNoonTZDate(interval.start);
			const end = toNoonTZDate(interval.end);
			const result = [];
			const cursor = new TZDate(start.getFullYear(), start.getMonth(), 1, 12, 0, 0, timeZone);
			const endKey = end.getFullYear() * 12 + end.getMonth();
			while (cursor.getFullYear() * 12 + cursor.getMonth() <= endKey) {
				result.push(new TZDate(cursor, timeZone));
				cursor.setMonth(cursor.getMonth() + 1, 1);
			}
			return result;
		},
		addDays: (date, amount) => {
			const base = toNoonTZDate(date);
			base.setDate(base.getDate() + amount);
			return base;
		},
		addWeeks: (date, amount) => {
			const base = toNoonTZDate(date);
			base.setDate(base.getDate() + amount * 7);
			return base;
		},
		addMonths: (date, amount) => {
			const base = toNoonTZDate(date);
			base.setMonth(base.getMonth() + amount);
			return base;
		},
		addYears: (date, amount) => {
			const base = toNoonTZDate(date);
			base.setFullYear(base.getFullYear() + amount);
			return base;
		},
		eachYearOfInterval: (interval) => {
			const start = toNoonTZDate(interval.start);
			const end = toNoonTZDate(interval.end);
			const years = [];
			const cursor = new TZDate(start.getFullYear(), 0, 1, 12, 0, 0, timeZone);
			while (cursor.getFullYear() <= end.getFullYear()) {
				years.push(new TZDate(cursor, timeZone));
				cursor.setFullYear(cursor.getFullYear() + 1, 0, 1);
			}
			return years;
		},
		getWeek: (date, options) => {
			return getWeek(toCalendarDate(date), {
				weekStartsOn: options?.weekStartsOn ?? fallbackWeekStartsOn,
				firstWeekContainsDate: options?.firstWeekContainsDate ?? locale?.options?.firstWeekContainsDate ?? 1
			});
		},
		getISOWeek: (date) => {
			return getISOWeek(toCalendarDate(date));
		},
		differenceInCalendarDays: (dateLeft, dateRight) => {
			return differenceInCalendarDays(toCalendarDate(dateLeft), toCalendarDate(dateRight));
		},
		differenceInCalendarMonths: (dateLeft, dateRight) => {
			return differenceInCalendarMonths(toCalendarDate(dateLeft), toCalendarDate(dateRight));
		}
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useAnimation.js
var asHtmlElement = (element) => {
	if (element instanceof HTMLElement) return element;
	return null;
};
var queryMonthEls = (element) => [...element.querySelectorAll("[data-animated-month]") ?? []];
var queryMonthEl = (element) => asHtmlElement(element.querySelector("[data-animated-month]"));
var queryCaptionEl = (element) => asHtmlElement(element.querySelector("[data-animated-caption]"));
var queryWeeksEl = (element) => asHtmlElement(element.querySelector("[data-animated-weeks]"));
var queryNavEl = (element) => asHtmlElement(element.querySelector("[data-animated-nav]"));
var queryWeekdaysEl = (element) => asHtmlElement(element.querySelector("[data-animated-weekdays]"));
/**
* Handles animations for transitioning between months in the DayPicker
* component.
*
* @private
* @param rootElRef - A reference to the root element of the DayPicker
*   component.
* @param enabled - Whether animations are enabled.
* @param options - Configuration options for the animation, including class
*   names, months, focused day, and the date utility library.
*/
function useAnimation(rootElRef, enabled, { classNames, months, focused, dateLib }) {
	const previousRootElSnapshotRef = useRef(null);
	const previousMonthsRef = useRef(months);
	const animatingRef = useRef(false);
	useLayoutEffect(() => {
		const previousMonths = previousMonthsRef.current;
		previousMonthsRef.current = months;
		if (!enabled || !rootElRef.current || !(rootElRef.current instanceof HTMLElement) || months.length === 0 || previousMonths.length === 0 || months.length !== previousMonths.length) return;
		const isSameMonth = dateLib.isSameMonth(months[0].date, previousMonths[0].date);
		const isAfterPreviousMonth = dateLib.isAfter(months[0].date, previousMonths[0].date);
		const captionAnimationClass = isAfterPreviousMonth ? classNames[Animation.caption_after_enter] : classNames[Animation.caption_before_enter];
		const weeksAnimationClass = isAfterPreviousMonth ? classNames[Animation.weeks_after_enter] : classNames[Animation.weeks_before_enter];
		const previousRootElSnapshot = previousRootElSnapshotRef.current;
		const rootElSnapshot = rootElRef.current.cloneNode(true);
		if (rootElSnapshot instanceof HTMLElement) {
			queryMonthEls(rootElSnapshot).forEach((currentMonthElSnapshot) => {
				if (!(currentMonthElSnapshot instanceof HTMLElement)) return;
				const previousMonthElSnapshot = queryMonthEl(currentMonthElSnapshot);
				if (previousMonthElSnapshot && currentMonthElSnapshot.contains(previousMonthElSnapshot)) currentMonthElSnapshot.removeChild(previousMonthElSnapshot);
				const captionEl = queryCaptionEl(currentMonthElSnapshot);
				if (captionEl) captionEl.classList.remove(captionAnimationClass);
				const weeksEl = queryWeeksEl(currentMonthElSnapshot);
				if (weeksEl) weeksEl.classList.remove(weeksAnimationClass);
			});
			previousRootElSnapshotRef.current = rootElSnapshot;
		} else previousRootElSnapshotRef.current = null;
		if (animatingRef.current || isSameMonth || focused) return;
		const previousMonthEls = previousRootElSnapshot instanceof HTMLElement ? queryMonthEls(previousRootElSnapshot) : [];
		const currentMonthEls = queryMonthEls(rootElRef.current);
		if (currentMonthEls?.every((el) => el instanceof HTMLElement) && previousMonthEls && previousMonthEls.every((el) => el instanceof HTMLElement)) {
			animatingRef.current = true;
			const cleanUpFunctions = [];
			rootElRef.current.style.isolation = "isolate";
			const navEl = queryNavEl(rootElRef.current);
			if (navEl) navEl.style.zIndex = "1";
			currentMonthEls.forEach((currentMonthEl, index) => {
				const previousMonthEl = previousMonthEls[index];
				if (!previousMonthEl) return;
				currentMonthEl.style.position = "relative";
				currentMonthEl.style.overflow = "hidden";
				const captionEl = queryCaptionEl(currentMonthEl);
				if (captionEl) captionEl.classList.add(captionAnimationClass);
				const weeksEl = queryWeeksEl(currentMonthEl);
				if (weeksEl) weeksEl.classList.add(weeksAnimationClass);
				const cleanUp = () => {
					animatingRef.current = false;
					if (rootElRef.current) rootElRef.current.style.isolation = "";
					if (navEl) navEl.style.zIndex = "";
					if (captionEl) captionEl.classList.remove(captionAnimationClass);
					if (weeksEl) weeksEl.classList.remove(weeksAnimationClass);
					currentMonthEl.style.position = "";
					currentMonthEl.style.overflow = "";
					if (currentMonthEl.contains(previousMonthEl)) currentMonthEl.removeChild(previousMonthEl);
				};
				cleanUpFunctions.push(cleanUp);
				previousMonthEl.style.pointerEvents = "none";
				previousMonthEl.style.position = "absolute";
				previousMonthEl.style.overflow = "hidden";
				previousMonthEl.setAttribute("aria-hidden", "true");
				const previousWeekdaysEl = queryWeekdaysEl(previousMonthEl);
				if (previousWeekdaysEl) previousWeekdaysEl.style.opacity = "0";
				const previousCaptionEl = queryCaptionEl(previousMonthEl);
				if (previousCaptionEl) {
					previousCaptionEl.classList.add(isAfterPreviousMonth ? classNames[Animation.caption_before_exit] : classNames[Animation.caption_after_exit]);
					previousCaptionEl.addEventListener("animationend", cleanUp);
				}
				const previousWeeksEl = queryWeeksEl(previousMonthEl);
				if (previousWeeksEl) previousWeeksEl.classList.add(isAfterPreviousMonth ? classNames[Animation.weeks_before_exit] : classNames[Animation.weeks_after_exit]);
				currentMonthEl.insertBefore(previousMonthEl, currentMonthEl.firstChild);
			});
		}
	});
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDates.js
/**
* Returns all the dates to display in the calendar.
*
* This function calculates the range of dates to display based on the provided
* display months, constraints, and calendar configuration.
*
* @param displayMonths The months to display in the calendar.
* @param maxDate The maximum date to include in the range.
* @param props The DayPicker props, including calendar configuration options.
* @param dateLib The date library to use for date manipulation.
* @returns An array of dates to display in the calendar.
*/
function getDates(displayMonths, maxDate, props, dateLib) {
	const firstMonth = displayMonths[0];
	const lastMonth = displayMonths[displayMonths.length - 1];
	const { ISOWeek, fixedWeeks, broadcastCalendar } = props ?? {};
	const { addDays, differenceInCalendarDays, differenceInCalendarMonths, endOfBroadcastWeek, endOfISOWeek, endOfMonth, endOfWeek, isAfter, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
	const startWeekFirstDate = broadcastCalendar ? startOfBroadcastWeek(firstMonth, dateLib) : ISOWeek ? startOfISOWeek(firstMonth) : startOfWeek(firstMonth);
	const displayMonthsWeekEnd = broadcastCalendar ? endOfBroadcastWeek(lastMonth) : ISOWeek ? endOfISOWeek(endOfMonth(lastMonth)) : endOfWeek(endOfMonth(lastMonth));
	const constraintWeekEnd = maxDate && (broadcastCalendar ? endOfBroadcastWeek(maxDate) : ISOWeek ? endOfISOWeek(maxDate) : endOfWeek(maxDate));
	const nOfDays = differenceInCalendarDays(constraintWeekEnd && isAfter(displayMonthsWeekEnd, constraintWeekEnd) ? constraintWeekEnd : displayMonthsWeekEnd, startWeekFirstDate);
	const nOfMonths = differenceInCalendarMonths(lastMonth, firstMonth) + 1;
	const dates = [];
	for (let i = 0; i <= nOfDays; i++) {
		const date = addDays(startWeekFirstDate, i);
		dates.push(date);
	}
	const extraDates = (broadcastCalendar ? 35 : 42) * nOfMonths;
	if (fixedWeeks && dates.length < extraDates) {
		const daysToAdd = extraDates - dates.length;
		for (let i = 0; i < daysToAdd; i++) {
			const date = addDays(dates[dates.length - 1], 1);
			dates.push(date);
		}
	}
	return dates;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
* Returns all the days belonging to the calendar by merging the days in the
* weeks for each month.
*
* @param calendarMonths The array of calendar months.
* @returns An array of `CalendarDay` objects representing all the days in the
*   calendar.
*/
function getDays(calendarMonths) {
	const initialDays = [];
	return calendarMonths.reduce((days, month) => {
		const weekDays = month.weeks.reduce((weekDays, week) => {
			return weekDays.concat(week.days.slice());
		}, initialDays.slice());
		return days.concat(weekDays.slice());
	}, initialDays.slice());
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
* Returns the months to display in the calendar.
*
* @param firstDisplayedMonth The first month currently displayed in the
*   calendar.
* @param calendarEndMonth The latest month the user can navigate to.
* @param props The DayPicker props, including `numberOfMonths`.
* @param dateLib The date library to use for date manipulation.
* @returns An array of dates representing the months to display.
*/
function getDisplayMonths(firstDisplayedMonth, calendarEndMonth, props, dateLib) {
	const { numberOfMonths = 1 } = props;
	const months = [];
	for (let i = 0; i < numberOfMonths; i++) {
		const month = dateLib.addMonths(firstDisplayedMonth, i);
		if (calendarEndMonth && month > calendarEndMonth) break;
		months.push(month);
	}
	return months;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
/**
* Determines the initial month to display in the calendar based on the provided
* props.
*
* This function calculates the starting month, considering constraints such as
* `startMonth`, `endMonth`, and the number of months to display.
*
* @param props The DayPicker props, including navigation and date constraints.
* @param dateLib The date library to use for date manipulation.
* @returns The initial month to display.
*/
function getInitialMonth(props, navStart, navEnd, dateLib) {
	const { month, defaultMonth, today = dateLib.today(), numberOfMonths = 1 } = props;
	let initialMonth = month || defaultMonth || today;
	const { differenceInCalendarMonths, addMonths, startOfMonth } = dateLib;
	if (navEnd && differenceInCalendarMonths(navEnd, initialMonth) < numberOfMonths - 1) initialMonth = addMonths(navEnd, -1 * (numberOfMonths - 1));
	if (navStart && differenceInCalendarMonths(initialMonth, navStart) < 0) initialMonth = navStart;
	return startOfMonth(initialMonth);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getMonths.js
/**
* Returns the months to display in the calendar.
*
* This function generates `CalendarMonth` objects for each month to be
* displayed, including their weeks and days, based on the provided display
* months and dates.
*
* @param displayMonths The months (as dates) to display in the calendar.
* @param dates The dates to display in the calendar.
* @param props Options from the DayPicker props context.
* @param dateLib The date library to use for date manipulation.
* @returns An array of `CalendarMonth` objects representing the months to
*   display.
*/
function getMonths(displayMonths, dates, props, dateLib) {
	const { addDays, endOfBroadcastWeek, endOfISOWeek, endOfMonth, endOfWeek, getISOWeek, getWeek, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
	const dayPickerMonths = displayMonths.reduce((months, month) => {
		const firstDateOfFirstWeek = props.broadcastCalendar ? startOfBroadcastWeek(month, dateLib) : props.ISOWeek ? startOfISOWeek(month) : startOfWeek(month);
		const lastDateOfLastWeek = props.broadcastCalendar ? endOfBroadcastWeek(month) : props.ISOWeek ? endOfISOWeek(endOfMonth(month)) : endOfWeek(endOfMonth(month));
		/** The dates to display in the month. */
		const monthDates = dates.filter((date) => {
			return date >= firstDateOfFirstWeek && date <= lastDateOfLastWeek;
		});
		const nrOfDaysWithFixedWeeks = props.broadcastCalendar ? 35 : 42;
		if (props.fixedWeeks && monthDates.length < nrOfDaysWithFixedWeeks) {
			const extraDates = dates.filter((date) => {
				const daysToAdd = nrOfDaysWithFixedWeeks - monthDates.length;
				return date > lastDateOfLastWeek && date <= addDays(lastDateOfLastWeek, daysToAdd);
			});
			monthDates.push(...extraDates);
		}
		const dayPickerMonth = new CalendarMonth(month, monthDates.reduce((weeks, date) => {
			const weekNumber = props.ISOWeek ? getISOWeek(date) : getWeek(date);
			const week = weeks.find((week) => week.weekNumber === weekNumber);
			const day = new CalendarDay(date, month, dateLib);
			if (!week) weeks.push(new CalendarWeek(weekNumber, [day]));
			else week.days.push(day);
			return weeks;
		}, []));
		months.push(dayPickerMonth);
		return months;
	}, []);
	if (!props.reverseMonths) return dayPickerMonths;
	else return dayPickerMonths.reverse();
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
* Returns the start and end months for calendar navigation.
*
* @param props The DayPicker props, including navigation and layout options.
* @param dateLib The date library to use for date manipulation.
* @returns A tuple containing the start and end months for navigation.
*/
function getNavMonths(props, dateLib) {
	let { startMonth, endMonth } = props;
	const { startOfYear, startOfDay, startOfMonth, endOfMonth, addYears, endOfYear, newDate, today } = dateLib;
	const { fromYear, toYear, fromMonth, toMonth } = props;
	if (!startMonth && fromMonth) startMonth = fromMonth;
	if (!startMonth && fromYear) startMonth = dateLib.newDate(fromYear, 0, 1);
	if (!endMonth && toMonth) endMonth = toMonth;
	if (!endMonth && toYear) endMonth = newDate(toYear, 11, 31);
	const hasYearDropdown = props.captionLayout === "dropdown" || props.captionLayout === "dropdown-years";
	if (startMonth) startMonth = startOfMonth(startMonth);
	else if (fromYear) startMonth = newDate(fromYear, 0, 1);
	else if (!startMonth && hasYearDropdown) startMonth = startOfYear(addYears(props.today ?? today(), -100));
	if (endMonth) endMonth = endOfMonth(endMonth);
	else if (toYear) endMonth = newDate(toYear, 11, 31);
	else if (!endMonth && hasYearDropdown) endMonth = endOfYear(props.today ?? today());
	return [startMonth ? startOfDay(startMonth) : startMonth, endMonth ? startOfDay(endMonth) : endMonth];
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
/**
* Returns the next month the user can navigate to, based on the given options.
*
* The next month is not always the next calendar month:
*
* - If it is after the `calendarEndMonth`, it returns `undefined`.
* - If paged navigation is enabled, it skips forward by the number of displayed
*   months.
*
* @param firstDisplayedMonth The first month currently displayed in the
*   calendar.
* @param calendarEndMonth The latest month the user can navigate to.
* @param options Navigation options, including `numberOfMonths` and
*   `pagedNavigation`.
* @param dateLib The date library to use for date manipulation.
* @returns The next month, or `undefined` if navigation is not possible.
*/
function getNextMonth(firstDisplayedMonth, calendarEndMonth, options, dateLib) {
	if (options.disableNavigation) return;
	const { pagedNavigation, numberOfMonths = 1 } = options;
	const { startOfMonth, addMonths, differenceInCalendarMonths } = dateLib;
	const offset = pagedNavigation ? numberOfMonths : 1;
	const month = startOfMonth(firstDisplayedMonth);
	if (!calendarEndMonth) return addMonths(month, offset);
	if (differenceInCalendarMonths(calendarEndMonth, firstDisplayedMonth) < numberOfMonths) return;
	return addMonths(month, offset);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
/**
* Returns the previous month the user can navigate to, based on the given
* options.
*
* The previous month is not always the previous calendar month:
*
* - If it is before the `calendarStartMonth`, it returns `undefined`.
* - If paged navigation is enabled, it skips back by the number of displayed
*   months.
*
* @param firstDisplayedMonth The first month currently displayed in the
*   calendar.
* @param calendarStartMonth The earliest month the user can navigate to.
* @param options Navigation options, including `numberOfMonths` and
*   `pagedNavigation`.
* @param dateLib The date library to use for date manipulation.
* @returns The previous month, or `undefined` if navigation is not possible.
*/
function getPreviousMonth(firstDisplayedMonth, calendarStartMonth, options, dateLib) {
	if (options.disableNavigation) return;
	const { pagedNavigation, numberOfMonths } = options;
	const { startOfMonth, addMonths, differenceInCalendarMonths } = dateLib;
	const offset = pagedNavigation ? numberOfMonths ?? 1 : 1;
	const month = startOfMonth(firstDisplayedMonth);
	if (!calendarStartMonth) return addMonths(month, -offset);
	if (differenceInCalendarMonths(month, calendarStartMonth) <= 0) return;
	return addMonths(month, -offset);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
* Returns an array of calendar weeks from an array of calendar months.
*
* @param months The array of calendar months.
* @returns An array of calendar weeks.
*/
function getWeeks(months) {
	return months.reduce((weeks, month) => {
		return weeks.concat(month.weeks.slice());
	}, [].slice());
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
/**
* A custom hook for managing both controlled and uncontrolled component states.
*
* This hook allows a component to support both controlled and uncontrolled
* states by determining whether the `controlledValue` is provided. If it is
* undefined, the hook falls back to using the internal state.
*
* @example
*   // Uncontrolled usage
*   const [value, setValue] = useControlledValue(0, undefined);
*
*   // Controlled usage
*   const [value, setValue] = useControlledValue(0, props.value);
*
* @template T - The type of the value.
* @param defaultValue The initial value for the uncontrolled state.
* @param controlledValue The value for the controlled state. If undefined, the
*   component will use the uncontrolled state.
* @returns A tuple where the first element is the current value (either
*   controlled or uncontrolled) and the second element is a setter function to
*   update the value.
*/
function useControlledValue(defaultValue, controlledValue) {
	const [uncontrolledValue, setValue] = useState(defaultValue);
	return [controlledValue === void 0 ? uncontrolledValue : controlledValue, setValue];
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useCalendar.js
/**
* Provides the calendar object to work with the calendar in custom components.
*
* @private
* @param props - The DayPicker props related to calendar configuration.
* @param dateLib - The date utility library instance.
* @returns The calendar object containing displayed days, weeks, months, and
*   navigation methods.
*/
function useCalendar(props, dateLib) {
	const [navStart, navEnd] = getNavMonths(props, dateLib);
	const { startOfMonth, endOfMonth } = dateLib;
	const initialMonth = getInitialMonth(props, navStart, navEnd, dateLib);
	const [firstMonth, setFirstMonth] = useControlledValue(initialMonth, props.month ? initialMonth : void 0);
	useEffect(() => {
		setFirstMonth(getInitialMonth(props, navStart, navEnd, dateLib));
	}, [props.timeZone]);
	/** The months displayed in the calendar. */
	const { months, weeks, days, previousMonth, nextMonth } = useMemo(() => {
		const displayMonths = getDisplayMonths(firstMonth, navEnd, { numberOfMonths: props.numberOfMonths }, dateLib);
		const months = getMonths(displayMonths, getDates(displayMonths, props.endMonth ? endOfMonth(props.endMonth) : void 0, {
			ISOWeek: props.ISOWeek,
			fixedWeeks: props.fixedWeeks,
			broadcastCalendar: props.broadcastCalendar
		}, dateLib), {
			broadcastCalendar: props.broadcastCalendar,
			fixedWeeks: props.fixedWeeks,
			ISOWeek: props.ISOWeek,
			reverseMonths: props.reverseMonths
		}, dateLib);
		return {
			months,
			weeks: getWeeks(months),
			days: getDays(months),
			previousMonth: getPreviousMonth(firstMonth, navStart, props, dateLib),
			nextMonth: getNextMonth(firstMonth, navEnd, props, dateLib)
		};
	}, [
		dateLib,
		firstMonth.getTime(),
		navEnd?.getTime(),
		navStart?.getTime(),
		props.disableNavigation,
		props.broadcastCalendar,
		props.endMonth?.getTime(),
		props.fixedWeeks,
		props.ISOWeek,
		props.numberOfMonths,
		props.pagedNavigation,
		props.reverseMonths
	]);
	const { disableNavigation, onMonthChange } = props;
	const isDayInCalendar = (day) => weeks.some((week) => week.days.some((d) => d.isEqualTo(day)));
	const goToMonth = (date) => {
		if (disableNavigation) return;
		let newMonth = startOfMonth(date);
		if (navStart && newMonth < startOfMonth(navStart)) newMonth = startOfMonth(navStart);
		if (navEnd && newMonth > startOfMonth(navEnd)) newMonth = startOfMonth(navEnd);
		setFirstMonth(newMonth);
		onMonthChange?.(newMonth);
	};
	const goToDay = (day) => {
		if (isDayInCalendar(day)) return;
		goToMonth(day.date);
	};
	return {
		months,
		weeks,
		days,
		navStart,
		navEnd,
		previousMonth,
		nextMonth,
		goToMonth,
		goToDay
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var FocusTargetPriority;
(function(FocusTargetPriority) {
	FocusTargetPriority[FocusTargetPriority["Today"] = 0] = "Today";
	FocusTargetPriority[FocusTargetPriority["Selected"] = 1] = "Selected";
	FocusTargetPriority[FocusTargetPriority["LastFocused"] = 2] = "LastFocused";
	FocusTargetPriority[FocusTargetPriority["FocusedModifier"] = 3] = "FocusedModifier";
})(FocusTargetPriority || (FocusTargetPriority = {}));
/**
* Determines if a day is focusable based on its modifiers.
*
* A day is considered focusable if it is not disabled, hidden, or outside the
* displayed month.
*
* @param modifiers The modifiers applied to the day.
* @returns `true` if the day is focusable, otherwise `false`.
*/
function isFocusableDay(modifiers) {
	return !modifiers[DayFlag.disabled] && !modifiers[DayFlag.hidden] && !modifiers[DayFlag.outside];
}
/**
* Calculates the focus target day based on priority.
*
* This function determines the day that should receive focus in the calendar,
* prioritizing days with specific modifiers (e.g., "focused", "today") or
* selection states.
*
* @param days The array of `CalendarDay` objects to evaluate.
* @param getModifiers A function to retrieve the modifiers for a given day.
* @param isSelected A function to determine if a day is selected.
* @param lastFocused The last focused day, if any.
* @returns The `CalendarDay` that should receive focus, or `undefined` if no
*   focusable day is found.
*/
function calculateFocusTarget(days, getModifiers, isSelected, lastFocused) {
	let focusTarget;
	let foundFocusTargetPriority = -1;
	for (const day of days) {
		const modifiers = getModifiers(day);
		if (isFocusableDay(modifiers)) {
			if (modifiers[DayFlag.focused] && foundFocusTargetPriority < FocusTargetPriority.FocusedModifier) {
				focusTarget = day;
				foundFocusTargetPriority = FocusTargetPriority.FocusedModifier;
			} else if (lastFocused?.isEqualTo(day) && foundFocusTargetPriority < FocusTargetPriority.LastFocused) {
				focusTarget = day;
				foundFocusTargetPriority = FocusTargetPriority.LastFocused;
			} else if (isSelected(day.date) && foundFocusTargetPriority < FocusTargetPriority.Selected) {
				focusTarget = day;
				foundFocusTargetPriority = FocusTargetPriority.Selected;
			} else if (modifiers[DayFlag.today] && foundFocusTargetPriority < FocusTargetPriority.Today) {
				focusTarget = day;
				foundFocusTargetPriority = FocusTargetPriority.Today;
			}
		}
	}
	if (!focusTarget) focusTarget = days.find((day) => isFocusableDay(getModifiers(day)));
	return focusTarget;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
/**
* Calculates the next date that should be focused in the calendar.
*
* This function determines the next focusable date based on the movement
* direction, constraints, and calendar configuration.
*
* @param moveBy The unit of movement (e.g., "day", "week").
* @param moveDir The direction of movement ("before" or "after").
* @param refDate The reference date from which to calculate the next focusable
*   date.
* @param navStart The earliest date the user can navigate to.
* @param navEnd The latest date the user can navigate to.
* @param props The DayPicker props, including calendar configuration options.
* @param dateLib The date library to use for date manipulation.
* @returns The next focusable date.
*/
function getFocusableDate(moveBy, moveDir, refDate, navStart, navEnd, props, dateLib) {
	const { ISOWeek, broadcastCalendar } = props;
	const { addDays, addMonths, addWeeks, addYears, endOfBroadcastWeek, endOfISOWeek, endOfWeek, max, min, startOfBroadcastWeek, startOfISOWeek, startOfWeek } = dateLib;
	let focusableDate = {
		day: addDays,
		week: addWeeks,
		month: addMonths,
		year: addYears,
		startOfWeek: (date) => broadcastCalendar ? startOfBroadcastWeek(date, dateLib) : ISOWeek ? startOfISOWeek(date) : startOfWeek(date),
		endOfWeek: (date) => broadcastCalendar ? endOfBroadcastWeek(date) : ISOWeek ? endOfISOWeek(date) : endOfWeek(date)
	}[moveBy](refDate, moveDir === "after" ? 1 : -1);
	if (moveDir === "before" && navStart) focusableDate = max([navStart, focusableDate]);
	else if (moveDir === "after" && navEnd) focusableDate = min([navEnd, focusableDate]);
	return focusableDate;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
/**
* Determines the next focusable day in the calendar.
*
* This function recursively calculates the next focusable day based on the
* movement direction and modifiers applied to the days.
*
* @param moveBy The unit of movement (e.g., "day", "week").
* @param moveDir The direction of movement ("before" or "after").
* @param refDay The currently focused day.
* @param calendarStartMonth The earliest month the user can navigate to.
* @param calendarEndMonth The latest month the user can navigate to.
* @param props The DayPicker props, including modifiers and configuration
*   options.
* @param dateLib The date library to use for date manipulation.
* @param attempt The current recursion attempt (used to limit recursion depth).
* @returns The next focusable day, or `undefined` if no focusable day is found.
*/
function getNextFocus(moveBy, moveDir, refDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt = 0) {
	if (attempt > 365) return;
	const focusableDate = getFocusableDate(moveBy, moveDir, refDay.date, calendarStartMonth, calendarEndMonth, props, dateLib);
	const isDisabled = Boolean(props.disabled && dateMatchModifiers(focusableDate, props.disabled, dateLib));
	const isHidden = Boolean(props.hidden && dateMatchModifiers(focusableDate, props.hidden, dateLib));
	const focusDay = new CalendarDay(focusableDate, focusableDate, dateLib);
	if (!isDisabled && !isHidden) return focusDay;
	return getNextFocus(moveBy, moveDir, focusDay, calendarStartMonth, calendarEndMonth, props, dateLib, attempt + 1);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useFocus.js
/**
* Manages focus behavior for the DayPicker component, including setting,
* moving, and blurring focus on calendar days.
*
* @template T - The type of DayPicker props.
* @param props - The DayPicker props.
* @param calendar - The calendar object containing the displayed days and
*   months.
* @param getModifiers - A function to retrieve modifiers for a given day.
* @param isSelected - A function to check if a date is selected.
* @param dateLib - The date utility library instance.
* @returns An object containing focus-related methods and the currently focused
*   day.
*/
function useFocus(props, calendar, getModifiers, isSelected, dateLib) {
	const { autoFocus } = props;
	const [lastFocused, setLastFocused] = useState();
	const focusTarget = calculateFocusTarget(calendar.days, getModifiers, isSelected || (() => false), lastFocused);
	const [focusedDay, setFocused] = useState(autoFocus ? focusTarget : void 0);
	const blur = () => {
		setLastFocused(focusedDay);
		setFocused(void 0);
	};
	const moveFocus = (moveBy, moveDir) => {
		if (!focusedDay) return;
		const nextFocus = getNextFocus(moveBy, moveDir, focusedDay, calendar.navStart, calendar.navEnd, props, dateLib);
		if (!nextFocus) return;
		if (props.disableNavigation) {
			if (!calendar.days.some((day) => day.isEqualTo(nextFocus))) return;
		}
		calendar.goToDay(nextFocus);
		setFocused(nextFocus);
	};
	const isFocusTarget = (day) => {
		return Boolean(focusTarget?.isEqualTo(day));
	};
	return {
		isFocusTarget,
		setFocused,
		focused: focusedDay,
		blur,
		moveFocus
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
* Hook to manage multiple-date selection in the DayPicker component.
*
* @template T - The type of DayPicker props.
* @param props - The DayPicker props.
* @param dateLib - The date utility library instance.
* @returns An object containing the selected dates, a function to select dates,
*   and a function to check if a date is selected.
*/
function useMulti(props, dateLib) {
	const { selected: initiallySelected, required, onSelect } = props;
	const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
	const selected = !onSelect ? internallySelected : initiallySelected;
	const { isSameDay } = dateLib;
	const isSelected = (date) => {
		return selected?.some((d) => isSameDay(d, date)) ?? false;
	};
	const { min, max } = props;
	const select = (triggerDate, modifiers, e) => {
		let newDates = [...selected ?? []];
		if (isSelected(triggerDate)) {
			if (selected?.length === min) return;
			if (required && selected?.length === 1) return;
			newDates = selected?.filter((d) => !isSameDay(d, triggerDate));
		} else if (selected?.length === max) newDates = [triggerDate];
		else newDates = [...newDates, triggerDate];
		if (!onSelect) setSelected(newDates);
		onSelect?.(newDates, triggerDate, modifiers, e);
		return newDates;
	};
	return {
		selected,
		select,
		isSelected
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/addToRange.js
/**
* Adds a date to an existing range, considering constraints like minimum and
* maximum range size.
*
* @param date - The date to add to the range.
* @param initialRange - The initial range to which the date will be added.
* @param min - The minimum number of days in the range.
* @param max - The maximum number of days in the range.
* @param required - Whether the range must always include at least one date.
* @param dateLib - The date utility library instance.
* @returns The updated date range, or `undefined` if the range is cleared.
* @group Utilities
*/
function addToRange(date, initialRange, min = 0, max = 0, required = false, dateLib = defaultDateLib) {
	const { from, to } = initialRange || {};
	const { isSameDay, isAfter, isBefore } = dateLib;
	let range;
	if (!from && !to) range = {
		from: date,
		to: min > 0 ? void 0 : date
	};
	else if (from && !to) if (isSameDay(from, date)) if (min === 0) range = {
		from,
		to: date
	};
	else if (required) range = {
		from,
		to: void 0
	};
	else range = void 0;
	else if (isBefore(date, from)) range = {
		from: date,
		to: from
	};
	else range = {
		from,
		to: date
	};
	else if (from && to) if (isSameDay(from, date) && isSameDay(to, date)) if (required) range = {
		from,
		to
	};
	else range = void 0;
	else if (isSameDay(from, date)) range = {
		from,
		to: min > 0 ? void 0 : date
	};
	else if (isSameDay(to, date)) range = {
		from: date,
		to: min > 0 ? void 0 : date
	};
	else if (isBefore(date, from)) range = {
		from: date,
		to
	};
	else if (isAfter(date, from)) range = {
		from,
		to: date
	};
	else if (isAfter(date, to)) range = {
		from,
		to: date
	};
	else throw new Error("Invalid range");
	if (range?.from && range?.to) {
		const diff = dateLib.differenceInCalendarDays(range.to, range.from);
		if (max > 0 && diff > max) range = {
			from: date,
			to: void 0
		};
		else if (min > 1 && diff < min) range = {
			from: date,
			to: void 0
		};
	}
	return range;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
/**
* Checks if a date range contains one or more specified days of the week.
*
* @since 9.2.2
* @param range - The date range to check.
* @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
*   Sunday).
* @param dateLib - The date utility library instance.
* @returns `true` if the range contains the specified day(s) of the week,
*   otherwise `false`.
* @group Utilities
*/
function rangeContainsDayOfWeek(range, dayOfWeek, dateLib = defaultDateLib) {
	const dayOfWeekArr = !Array.isArray(dayOfWeek) ? [dayOfWeek] : dayOfWeek;
	let date = range.from;
	const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
	const totalDaysLimit = Math.min(totalDays, 6);
	for (let i = 0; i <= totalDaysLimit; i++) {
		if (dayOfWeekArr.includes(date.getDay())) return true;
		date = dateLib.addDays(date, 1);
	}
	return false;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
/**
* Determines if two date ranges overlap.
*
* @since 9.2.2
* @param rangeLeft - The first date range.
* @param rangeRight - The second date range.
* @param dateLib - The date utility library instance.
* @returns `true` if the ranges overlap, otherwise `false`.
* @group Utilities
*/
function rangeOverlaps(rangeLeft, rangeRight, dateLib = defaultDateLib) {
	return rangeIncludesDate(rangeLeft, rangeRight.from, false, dateLib) || rangeIncludesDate(rangeLeft, rangeRight.to, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.from, false, dateLib) || rangeIncludesDate(rangeRight, rangeLeft.to, false, dateLib);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
* Checks if a date range contains dates that match the given modifiers.
*
* @since 9.2.2
* @param range - The date range to check.
* @param modifiers - The modifiers to match against.
* @param dateLib - The date utility library instance.
* @returns `true` if the range contains matching dates, otherwise `false`.
* @group Utilities
*/
function rangeContainsModifiers(range, modifiers, dateLib = defaultDateLib) {
	const matchers = Array.isArray(modifiers) ? modifiers : [modifiers];
	if (matchers.filter((matcher) => typeof matcher !== "function").some((matcher) => {
		if (typeof matcher === "boolean") return matcher;
		if (dateLib.isDate(matcher)) return rangeIncludesDate(range, matcher, false, dateLib);
		if (isDatesArray(matcher, dateLib)) return matcher.some((date) => rangeIncludesDate(range, date, false, dateLib));
		if (isDateRange(matcher)) {
			if (matcher.from && matcher.to) return rangeOverlaps(range, {
				from: matcher.from,
				to: matcher.to
			}, dateLib);
			return false;
		}
		if (isDayOfWeekType(matcher)) return rangeContainsDayOfWeek(range, matcher.dayOfWeek, dateLib);
		if (isDateInterval(matcher)) {
			if (dateLib.isAfter(matcher.before, matcher.after)) return rangeOverlaps(range, {
				from: dateLib.addDays(matcher.after, 1),
				to: dateLib.addDays(matcher.before, -1)
			}, dateLib);
			return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
		}
		if (isDateAfterType(matcher) || isDateBeforeType(matcher)) return dateMatchModifiers(range.from, matcher, dateLib) || dateMatchModifiers(range.to, matcher, dateLib);
		return false;
	})) return true;
	const functionMatchers = matchers.filter((matcher) => typeof matcher === "function");
	if (functionMatchers.length) {
		let date = range.from;
		const totalDays = dateLib.differenceInCalendarDays(range.to, range.from);
		for (let i = 0; i <= totalDays; i++) {
			if (functionMatchers.some((matcher) => matcher(date))) return true;
			date = dateLib.addDays(date, 1);
		}
	}
	return false;
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
* Hook to manage range selection in the DayPicker component.
*
* @template T - The type of DayPicker props.
* @param props - The DayPicker props.
* @param dateLib - The date utility library instance.
* @returns An object containing the selected range, a function to select a
*   range, and a function to check if a date is within the range.
*/
function useRange(props, dateLib) {
	const { disabled, excludeDisabled, resetOnSelect, selected: initiallySelected, required, onSelect } = props;
	const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
	const selected = !onSelect ? internallySelected : initiallySelected;
	const isSelected = (date) => selected && rangeIncludesDate(selected, date, false, dateLib);
	const select = (triggerDate, modifiers, e) => {
		const { min, max } = props;
		let newRange;
		if (triggerDate) {
			const selectedFrom = selected?.from;
			const selectedTo = selected?.to;
			const hasFullRange = !!selectedFrom && !!selectedTo;
			const isClickingSingleDayRange = !!selectedFrom && !!selectedTo && dateLib.isSameDay(selectedFrom, selectedTo) && dateLib.isSameDay(triggerDate, selectedFrom);
			if (resetOnSelect && (hasFullRange || !selected?.from)) if (!required && isClickingSingleDayRange) newRange = void 0;
			else newRange = {
				from: triggerDate,
				to: void 0
			};
			else newRange = addToRange(triggerDate, selected, min, max, required, dateLib);
		}
		if (excludeDisabled && disabled && newRange?.from && newRange.to) {
			if (rangeContainsModifiers({
				from: newRange.from,
				to: newRange.to
			}, disabled, dateLib)) {
				newRange.from = triggerDate;
				newRange.to = void 0;
			}
		}
		if (!onSelect) setSelected(newRange);
		onSelect?.(newRange, triggerDate, modifiers, e);
		return newRange;
	};
	return {
		selected,
		select,
		isSelected
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
* Hook to manage single-date selection in the DayPicker component.
*
* @template T - The type of DayPicker props.
* @param props - The DayPicker props.
* @param dateLib - The date utility library instance.
* @returns An object containing the selected date, a function to select a date,
*   and a function to check if a date is selected.
*/
function useSingle(props, dateLib) {
	const { selected: initiallySelected, required, onSelect } = props;
	const [internallySelected, setSelected] = useControlledValue(initiallySelected, onSelect ? initiallySelected : void 0);
	const selected = !onSelect ? internallySelected : initiallySelected;
	const { isSameDay } = dateLib;
	const isSelected = (compareDate) => {
		return selected ? isSameDay(selected, compareDate) : false;
	};
	const select = (triggerDate, modifiers, e) => {
		let newDate = triggerDate;
		if (!required && selected && selected && isSameDay(triggerDate, selected)) newDate = void 0;
		if (!onSelect) setSelected(newDate);
		if (required) onSelect?.(newDate, triggerDate, modifiers, e);
		else onSelect?.(newDate, triggerDate, modifiers, e);
		return newDate;
	};
	return {
		selected,
		select,
		isSelected
	};
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/useSelection.js
/**
* Determines the appropriate selection hook to use based on the selection mode
* and returns the corresponding selection object.
*
* @template T - The type of DayPicker props.
* @param props - The DayPicker props.
* @param dateLib - The date utility library instance.
* @returns The selection object for the specified mode, or `undefined` if no
*   mode is set.
*/
function useSelection(props, dateLib) {
	const single = useSingle(props, dateLib);
	const multi = useMulti(props, dateLib);
	const range = useRange(props, dateLib);
	switch (props.mode) {
		case "single": return single;
		case "multiple": return multi;
		case "range": return range;
		default: return;
	}
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
/**
* Convert a {@link Date} or {@link TZDate} instance to the given time zone.
* Reuses the same instance when it is already a {@link TZDate} using the target
* time zone to avoid extra allocations.
*/
function toTimeZone(date, timeZone) {
	if (date instanceof TZDate && date.timeZone === timeZone) return date;
	return new TZDate(date, timeZone);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function toZoneNoon(date, timeZone, noonSafe) {
	if (!noonSafe) return toTimeZone(date, timeZone);
	const zoned = toTimeZone(date, timeZone);
	const noonZoned = new TZDate(zoned.getFullYear(), zoned.getMonth(), zoned.getDate(), 12, 0, 0, timeZone);
	return new Date(noonZoned.getTime());
}
function convertMatcher(matcher, timeZone, noonSafe) {
	if (typeof matcher === "boolean" || typeof matcher === "function") return matcher;
	if (matcher instanceof Date) return toZoneNoon(matcher, timeZone, noonSafe);
	if (Array.isArray(matcher)) return matcher.map((value) => value instanceof Date ? toZoneNoon(value, timeZone, noonSafe) : value);
	if (isDateRange(matcher)) return {
		...matcher,
		from: matcher.from ? toTimeZone(matcher.from, timeZone) : matcher.from,
		to: matcher.to ? toTimeZone(matcher.to, timeZone) : matcher.to
	};
	if (isDateInterval(matcher)) return {
		before: toZoneNoon(matcher.before, timeZone, noonSafe),
		after: toZoneNoon(matcher.after, timeZone, noonSafe)
	};
	if (isDateAfterType(matcher)) return { after: toZoneNoon(matcher.after, timeZone, noonSafe) };
	if (isDateBeforeType(matcher)) return { before: toZoneNoon(matcher.before, timeZone, noonSafe) };
	return matcher;
}
/**
* Convert any {@link Matcher} or array of matchers to the specified time zone.
*
* @param matchers - The matcher or matchers to convert.
* @param timeZone - The target IANA time zone.
* @returns The converted matcher(s).
* @group Utilities
*/
function convertMatchersToTimeZone(matchers, timeZone, noonSafe) {
	if (!matchers) return matchers;
	if (Array.isArray(matchers)) return matchers.map((matcher) => convertMatcher(matcher, timeZone, noonSafe));
	return convertMatcher(matchers, timeZone, noonSafe);
}
//#endregion
//#region node_modules/react-day-picker/dist/esm/DayPicker.js
/**
* Renders the DayPicker calendar component.
*
* @param initialProps - The props for the DayPicker component.
* @returns The rendered DayPicker component.
* @group DayPicker
* @see https://daypicker.dev
*/
function DayPicker(initialProps) {
	let props = initialProps;
	const timeZone = props.timeZone;
	if (timeZone) {
		props = {
			...initialProps,
			timeZone
		};
		if (props.today) props.today = toTimeZone(props.today, timeZone);
		if (props.month) props.month = toTimeZone(props.month, timeZone);
		if (props.defaultMonth) props.defaultMonth = toTimeZone(props.defaultMonth, timeZone);
		if (props.startMonth) props.startMonth = toTimeZone(props.startMonth, timeZone);
		if (props.endMonth) props.endMonth = toTimeZone(props.endMonth, timeZone);
		if (props.mode === "single" && props.selected) props.selected = toTimeZone(props.selected, timeZone);
		else if (props.mode === "multiple" && props.selected) props.selected = props.selected?.map((date) => toTimeZone(date, timeZone));
		else if (props.mode === "range" && props.selected) props.selected = {
			from: props.selected.from ? toTimeZone(props.selected.from, timeZone) : props.selected.from,
			to: props.selected.to ? toTimeZone(props.selected.to, timeZone) : props.selected.to
		};
		if (props.disabled !== void 0) props.disabled = convertMatchersToTimeZone(props.disabled, timeZone);
		if (props.hidden !== void 0) props.hidden = convertMatchersToTimeZone(props.hidden, timeZone);
		if (props.modifiers) {
			const nextModifiers = {};
			Object.keys(props.modifiers).forEach((key) => {
				nextModifiers[key] = convertMatchersToTimeZone(props.modifiers?.[key], timeZone);
			});
			props.modifiers = nextModifiers;
		}
	}
	const { components, formatters, labels, dateLib, locale, classNames } = useMemo(() => {
		const locale = {
			...enUS,
			...props.locale
		};
		const weekStartsOn = props.broadcastCalendar ? 1 : props.weekStartsOn;
		const noonOverrides = props.noonSafe && props.timeZone ? createNoonOverrides(props.timeZone, {
			weekStartsOn,
			locale
		}) : void 0;
		const overrides = props.dateLib && noonOverrides ? {
			...noonOverrides,
			...props.dateLib
		} : props.dateLib ?? noonOverrides;
		const dateLib = new DateLib({
			locale,
			weekStartsOn,
			firstWeekContainsDate: props.firstWeekContainsDate,
			useAdditionalWeekYearTokens: props.useAdditionalWeekYearTokens,
			useAdditionalDayOfYearTokens: props.useAdditionalDayOfYearTokens,
			timeZone: props.timeZone,
			numerals: props.numerals
		}, overrides);
		return {
			dateLib,
			components: getComponents(props.components),
			formatters: getFormatters(props.formatters),
			labels: getLabels(props.labels, dateLib.options),
			locale,
			classNames: {
				...getDefaultClassNames(),
				...props.classNames
			}
		};
	}, [
		props.locale,
		props.broadcastCalendar,
		props.weekStartsOn,
		props.firstWeekContainsDate,
		props.useAdditionalWeekYearTokens,
		props.useAdditionalDayOfYearTokens,
		props.timeZone,
		props.numerals,
		props.dateLib,
		props.noonSafe,
		props.components,
		props.formatters,
		props.labels,
		props.classNames
	]);
	if (!props.today) props = {
		...props,
		today: dateLib.today()
	};
	const { captionLayout, mode, navLayout, numberOfMonths = 1, onDayBlur, onDayClick, onDayFocus, onDayKeyDown, onDayMouseEnter, onDayMouseLeave, onNextClick, onPrevClick, showWeekNumber, styles } = props;
	const { formatCaption, formatDay, formatMonthDropdown, formatWeekNumber, formatWeekNumberHeader, formatWeekdayName, formatYearDropdown } = formatters;
	const calendar = useCalendar(props, dateLib);
	const { days, months, navStart, navEnd, previousMonth, nextMonth, goToMonth } = calendar;
	const getModifiers = createGetModifiers(days, props, navStart, navEnd, dateLib);
	const { isSelected, select, selected: selectedValue } = useSelection(props, dateLib) ?? {};
	const { blur, focused, isFocusTarget, moveFocus, setFocused } = useFocus(props, calendar, getModifiers, isSelected ?? (() => false), dateLib);
	const { labelDayButton, labelGridcell, labelGrid, labelMonthDropdown, labelNav, labelPrevious, labelNext, labelWeekday, labelWeekNumber, labelWeekNumberHeader, labelYearDropdown } = labels;
	const weekdays = useMemo(() => getWeekdays(dateLib, props.ISOWeek, props.broadcastCalendar, props.today), [
		dateLib,
		props.ISOWeek,
		props.broadcastCalendar,
		props.today
	]);
	const isInteractive = mode !== void 0 || onDayClick !== void 0;
	const handlePreviousClick = useCallback(() => {
		if (!previousMonth) return;
		goToMonth(previousMonth);
		onPrevClick?.(previousMonth);
	}, [
		previousMonth,
		goToMonth,
		onPrevClick
	]);
	const handleNextClick = useCallback(() => {
		if (!nextMonth) return;
		goToMonth(nextMonth);
		onNextClick?.(nextMonth);
	}, [
		goToMonth,
		nextMonth,
		onNextClick
	]);
	const handleDayClick = useCallback((day, m) => (e) => {
		e.preventDefault();
		e.stopPropagation();
		setFocused(day);
		if (m.disabled) return;
		select?.(day.date, m, e);
		onDayClick?.(day.date, m, e);
	}, [
		select,
		onDayClick,
		setFocused
	]);
	const handleDayFocus = useCallback((day, m) => (e) => {
		setFocused(day);
		onDayFocus?.(day.date, m, e);
	}, [onDayFocus, setFocused]);
	const handleDayBlur = useCallback((day, m) => (e) => {
		blur();
		onDayBlur?.(day.date, m, e);
	}, [blur, onDayBlur]);
	const handleDayKeyDown = useCallback((day, modifiers) => (e) => {
		const keyMap = {
			ArrowLeft: [e.shiftKey ? "month" : "day", props.dir === "rtl" ? "after" : "before"],
			ArrowRight: [e.shiftKey ? "month" : "day", props.dir === "rtl" ? "before" : "after"],
			ArrowDown: [e.shiftKey ? "year" : "week", "after"],
			ArrowUp: [e.shiftKey ? "year" : "week", "before"],
			PageUp: [e.shiftKey ? "year" : "month", "before"],
			PageDown: [e.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (keyMap[e.key]) {
			e.preventDefault();
			e.stopPropagation();
			const [moveBy, moveDir] = keyMap[e.key];
			moveFocus(moveBy, moveDir);
		}
		onDayKeyDown?.(day.date, modifiers, e);
	}, [
		moveFocus,
		onDayKeyDown,
		props.dir
	]);
	const handleDayMouseEnter = useCallback((day, modifiers) => (e) => {
		onDayMouseEnter?.(day.date, modifiers, e);
	}, [onDayMouseEnter]);
	const handleDayMouseLeave = useCallback((day, modifiers) => (e) => {
		onDayMouseLeave?.(day.date, modifiers, e);
	}, [onDayMouseLeave]);
	const handleMonthChange = useCallback((date) => (e) => {
		const selectedMonth = Number(e.target.value);
		goToMonth(dateLib.setMonth(dateLib.startOfMonth(date), selectedMonth));
	}, [dateLib, goToMonth]);
	const handleYearChange = useCallback((date) => (e) => {
		const selectedYear = Number(e.target.value);
		goToMonth(dateLib.setYear(dateLib.startOfMonth(date), selectedYear));
	}, [dateLib, goToMonth]);
	const { className, style } = useMemo(() => ({
		className: [classNames[UI.Root], props.className].filter(Boolean).join(" "),
		style: {
			...styles?.[UI.Root],
			...props.style
		}
	}), [
		classNames,
		props.className,
		props.style,
		styles
	]);
	const dataAttributes = getDataAttributes(props);
	const rootElRef = useRef(null);
	useAnimation(rootElRef, Boolean(props.animate), {
		classNames,
		months,
		focused,
		dateLib
	});
	const contextValue = {
		dayPickerProps: props,
		selected: selectedValue,
		select,
		isSelected,
		months,
		nextMonth,
		previousMonth,
		goToMonth,
		getModifiers,
		components,
		classNames,
		styles,
		labels,
		formatters
	};
	return React.createElement(dayPickerContext.Provider, { value: contextValue }, React.createElement(components.Root, {
		rootRef: props.animate ? rootElRef : void 0,
		className,
		style,
		dir: props.dir,
		id: props.id,
		lang: props.lang ?? locale.code,
		nonce: props.nonce,
		title: props.title,
		role: props.role,
		"aria-label": props["aria-label"],
		"aria-labelledby": props["aria-labelledby"],
		...dataAttributes
	}, React.createElement(components.Months, {
		className: classNames[UI.Months],
		style: styles?.[UI.Months]
	}, !props.hideNavigation && !navLayout && React.createElement(components.Nav, {
		"data-animated-nav": props.animate ? "true" : void 0,
		className: classNames[UI.Nav],
		style: styles?.[UI.Nav],
		"aria-label": labelNav(),
		onPreviousClick: handlePreviousClick,
		onNextClick: handleNextClick,
		previousMonth,
		nextMonth
	}), months.map((calendarMonth, displayIndex) => {
		return React.createElement(components.Month, {
			"data-animated-month": props.animate ? "true" : void 0,
			className: classNames[UI.Month],
			style: styles?.[UI.Month],
			key: displayIndex,
			displayIndex,
			calendarMonth
		}, navLayout === "around" && !props.hideNavigation && displayIndex === 0 && React.createElement(components.PreviousMonthButton, {
			type: "button",
			className: classNames[UI.PreviousMonthButton],
			tabIndex: previousMonth ? void 0 : -1,
			"aria-disabled": previousMonth ? void 0 : true,
			"aria-label": labelPrevious(previousMonth),
			onClick: handlePreviousClick,
			"data-animated-button": props.animate ? "true" : void 0
		}, React.createElement(components.Chevron, {
			disabled: previousMonth ? void 0 : true,
			className: classNames[UI.Chevron],
			orientation: props.dir === "rtl" ? "right" : "left"
		})), React.createElement(components.MonthCaption, {
			"data-animated-caption": props.animate ? "true" : void 0,
			className: classNames[UI.MonthCaption],
			style: styles?.[UI.MonthCaption],
			calendarMonth,
			displayIndex
		}, captionLayout?.startsWith("dropdown") ? React.createElement(components.DropdownNav, {
			className: classNames[UI.Dropdowns],
			style: styles?.[UI.Dropdowns]
		}, (() => {
			const monthControl = captionLayout === "dropdown" || captionLayout === "dropdown-months" ? React.createElement(components.MonthsDropdown, {
				key: "month",
				className: classNames[UI.MonthsDropdown],
				"aria-label": labelMonthDropdown(),
				classNames,
				components,
				disabled: Boolean(props.disableNavigation),
				onChange: handleMonthChange(calendarMonth.date),
				options: getMonthOptions(calendarMonth.date, navStart, navEnd, formatters, dateLib),
				style: styles?.[UI.Dropdown],
				value: dateLib.getMonth(calendarMonth.date)
			}) : React.createElement("span", { key: "month" }, formatMonthDropdown(calendarMonth.date, dateLib));
			const yearControl = captionLayout === "dropdown" || captionLayout === "dropdown-years" ? React.createElement(components.YearsDropdown, {
				key: "year",
				className: classNames[UI.YearsDropdown],
				"aria-label": labelYearDropdown(dateLib.options),
				classNames,
				components,
				disabled: Boolean(props.disableNavigation),
				onChange: handleYearChange(calendarMonth.date),
				options: getYearOptions(navStart, navEnd, formatters, dateLib, Boolean(props.reverseYears)),
				style: styles?.[UI.Dropdown],
				value: dateLib.getYear(calendarMonth.date)
			}) : React.createElement("span", { key: "year" }, formatYearDropdown(calendarMonth.date, dateLib));
			return dateLib.getMonthYearOrder() === "year-first" ? [yearControl, monthControl] : [monthControl, yearControl];
		})(), React.createElement("span", {
			role: "status",
			"aria-live": "polite",
			style: {
				border: 0,
				clip: "rect(0 0 0 0)",
				height: "1px",
				margin: "-1px",
				overflow: "hidden",
				padding: 0,
				position: "absolute",
				width: "1px",
				whiteSpace: "nowrap",
				wordWrap: "normal"
			}
		}, formatCaption(calendarMonth.date, dateLib.options, dateLib))) : React.createElement(components.CaptionLabel, {
			className: classNames[UI.CaptionLabel],
			role: "status",
			"aria-live": "polite"
		}, formatCaption(calendarMonth.date, dateLib.options, dateLib))), navLayout === "around" && !props.hideNavigation && displayIndex === numberOfMonths - 1 && React.createElement(components.NextMonthButton, {
			type: "button",
			className: classNames[UI.NextMonthButton],
			tabIndex: nextMonth ? void 0 : -1,
			"aria-disabled": nextMonth ? void 0 : true,
			"aria-label": labelNext(nextMonth),
			onClick: handleNextClick,
			"data-animated-button": props.animate ? "true" : void 0
		}, React.createElement(components.Chevron, {
			disabled: nextMonth ? void 0 : true,
			className: classNames[UI.Chevron],
			orientation: props.dir === "rtl" ? "left" : "right"
		})), displayIndex === numberOfMonths - 1 && navLayout === "after" && !props.hideNavigation && React.createElement(components.Nav, {
			"data-animated-nav": props.animate ? "true" : void 0,
			className: classNames[UI.Nav],
			style: styles?.[UI.Nav],
			"aria-label": labelNav(),
			onPreviousClick: handlePreviousClick,
			onNextClick: handleNextClick,
			previousMonth,
			nextMonth
		}), React.createElement(components.MonthGrid, {
			role: "grid",
			"aria-multiselectable": mode === "multiple" || mode === "range",
			"aria-label": labelGrid(calendarMonth.date, dateLib.options, dateLib) || void 0,
			className: classNames[UI.MonthGrid],
			style: styles?.[UI.MonthGrid]
		}, !props.hideWeekdays && React.createElement(components.Weekdays, {
			"data-animated-weekdays": props.animate ? "true" : void 0,
			className: classNames[UI.Weekdays],
			style: styles?.[UI.Weekdays]
		}, showWeekNumber && React.createElement(components.WeekNumberHeader, {
			"aria-label": labelWeekNumberHeader(dateLib.options),
			className: classNames[UI.WeekNumberHeader],
			style: styles?.[UI.WeekNumberHeader],
			scope: "col"
		}, formatWeekNumberHeader()), weekdays.map((weekday) => React.createElement(components.Weekday, {
			"aria-label": labelWeekday(weekday, dateLib.options, dateLib),
			className: classNames[UI.Weekday],
			key: String(weekday),
			style: styles?.[UI.Weekday],
			scope: "col"
		}, formatWeekdayName(weekday, dateLib.options, dateLib)))), React.createElement(components.Weeks, {
			"data-animated-weeks": props.animate ? "true" : void 0,
			className: classNames[UI.Weeks],
			style: styles?.[UI.Weeks]
		}, calendarMonth.weeks.map((week) => {
			return React.createElement(components.Week, {
				className: classNames[UI.Week],
				key: week.weekNumber,
				style: styles?.[UI.Week],
				week
			}, showWeekNumber && React.createElement(components.WeekNumber, {
				week,
				style: styles?.[UI.WeekNumber],
				"aria-label": labelWeekNumber(week.weekNumber, { locale }),
				className: classNames[UI.WeekNumber],
				scope: "row",
				role: "rowheader"
			}, formatWeekNumber(week.weekNumber, dateLib)), week.days.map((day) => {
				const { date } = day;
				const modifiers = getModifiers(day);
				modifiers[DayFlag.focused] = !modifiers.hidden && Boolean(focused?.isEqualTo(day));
				modifiers[SelectionState.selected] = isSelected?.(date) || modifiers.selected;
				if (isDateRange(selectedValue)) {
					const { from, to } = selectedValue;
					modifiers[SelectionState.range_start] = Boolean(from && to && dateLib.isSameDay(date, from));
					modifiers[SelectionState.range_end] = Boolean(from && to && dateLib.isSameDay(date, to));
					modifiers[SelectionState.range_middle] = rangeIncludesDate(selectedValue, date, true, dateLib);
				}
				const style = getStyleForModifiers(modifiers, styles, props.modifiersStyles);
				const className = getClassNamesForModifiers(modifiers, classNames, props.modifiersClassNames);
				const ariaLabel = !isInteractive && !modifiers.hidden ? labelGridcell(date, modifiers, dateLib.options, dateLib) : void 0;
				return React.createElement(components.Day, {
					key: `${day.isoDate}_${day.displayMonthId}`,
					day,
					modifiers,
					className: className.join(" "),
					style,
					role: "gridcell",
					"aria-selected": modifiers.selected || void 0,
					"aria-label": ariaLabel,
					"data-day": day.isoDate,
					"data-month": day.outside ? day.dateMonthId : void 0,
					"data-selected": modifiers.selected || void 0,
					"data-disabled": modifiers.disabled || void 0,
					"data-hidden": modifiers.hidden || void 0,
					"data-outside": day.outside || void 0,
					"data-focused": modifiers.focused || void 0,
					"data-today": modifiers.today || void 0
				}, !modifiers.hidden && isInteractive ? React.createElement(components.DayButton, {
					className: classNames[UI.DayButton],
					style: styles?.[UI.DayButton],
					type: "button",
					day,
					modifiers,
					disabled: !modifiers.focused && modifiers.disabled || void 0,
					"aria-disabled": modifiers.focused && modifiers.disabled || void 0,
					tabIndex: isFocusTarget(day) ? 0 : -1,
					"aria-label": labelDayButton(date, modifiers, dateLib.options, dateLib),
					onClick: handleDayClick(day, modifiers),
					onBlur: handleDayBlur(day, modifiers),
					onFocus: handleDayFocus(day, modifiers),
					onKeyDown: handleDayKeyDown(day, modifiers),
					onMouseEnter: handleDayMouseEnter(day, modifiers),
					onMouseLeave: handleDayMouseLeave(day, modifiers)
				}, formatDay(date, dateLib.options, dateLib)) : !modifiers.hidden && formatDay(day.date, dateLib.options, dateLib));
			}));
		}))));
	})), props.footer && React.createElement(components.Footer, {
		className: classNames[UI.Footer],
		style: styles?.[UI.Footer],
		role: "status",
		"aria-live": "polite"
	}, props.footer)));
}
//#endregion
//#region src/components/shadcn/ui/calendar.tsx
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", locale, formatters, components, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	return /* @__PURE__ */ jsx(DayPicker, {
		showOutsideDays,
		className: cn$1("group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
		captionLayout,
		locale,
		formatters: {
			formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: "short" }),
			...formatters
		},
		classNames: {
			root: cn$1("w-fit", defaultClassNames.root),
			months: cn$1("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
			month: cn$1("flex w-full flex-col gap-4", defaultClassNames.month),
			nav: cn$1("absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1", defaultClassNames.nav),
			button_previous: cn$1(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", defaultClassNames.button_previous),
			button_next: cn$1(buttonVariants({ variant: buttonVariant }), "size-(--cell-size) p-0 select-none aria-disabled:opacity-50", defaultClassNames.button_next),
			month_caption: cn$1("flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)", defaultClassNames.month_caption),
			dropdowns: cn$1("flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium", defaultClassNames.dropdowns),
			dropdown_root: cn$1("relative rounded-(--cell-radius)", defaultClassNames.dropdown_root),
			dropdown: cn$1("absolute inset-0 bg-popover opacity-0", defaultClassNames.dropdown),
			caption_label: cn$1("font-medium select-none", captionLayout === "label" ? "text-sm" : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground", defaultClassNames.caption_label),
			table: "w-full border-collapse",
			weekdays: cn$1("flex", defaultClassNames.weekdays),
			weekday: cn$1("flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none", defaultClassNames.weekday),
			week: cn$1("mt-2 flex w-full", defaultClassNames.week),
			week_number_header: cn$1("w-(--cell-size) select-none", defaultClassNames.week_number_header),
			week_number: cn$1("text-[0.8rem] text-muted-foreground select-none", defaultClassNames.week_number),
			day: cn$1("group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)", props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)", defaultClassNames.day),
			range_start: cn$1("relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted", defaultClassNames.range_start),
			range_middle: cn$1("rounded-none", defaultClassNames.range_middle),
			range_end: cn$1("relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted", defaultClassNames.range_end),
			today: cn$1("rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none", defaultClassNames.today),
			outside: cn$1("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
			disabled: cn$1("text-muted-foreground opacity-50", defaultClassNames.disabled),
			hidden: cn$1("invisible", defaultClassNames.hidden),
			...classNames
		},
		components: {
			Root: ({ className, rootRef, ...props }) => {
				return /* @__PURE__ */ jsx("div", {
					"data-slot": "calendar",
					ref: rootRef,
					className: cn$1(className),
					...props
				});
			},
			Chevron: ({ className, orientation, ...props }) => {
				if (orientation === "left") return /* @__PURE__ */ jsx(ChevronLeft, {
					className: cn$1("size-4", className),
					...props
				});
				if (orientation === "right") return /* @__PURE__ */ jsx(ChevronRight, {
					className: cn$1("size-4", className),
					...props
				});
				return /* @__PURE__ */ jsx(ChevronDown, {
					className: cn$1("size-4", className),
					...props
				});
			},
			DayButton: ({ ...props }) => /* @__PURE__ */ jsx(CalendarDayButton, {
				locale,
				...props
			}),
			WeekNumber: ({ children, ...props }) => {
				return /* @__PURE__ */ jsx("td", {
					...props,
					children: /* @__PURE__ */ jsx("div", {
						className: "flex size-(--cell-size) items-center justify-center text-center",
						children
					})
				});
			},
			...components
		},
		...props
	});
}
function CalendarDayButton({ className, day, modifiers, locale, ...props }) {
	const defaultClassNames = getDefaultClassNames();
	const ref = React$1.useRef(null);
	React$1.useEffect(() => {
		if (modifiers.focused) ref.current?.focus();
	}, [modifiers.focused]);
	return /* @__PURE__ */ jsx(Button$2, {
		variant: "ghost",
		size: "icon",
		"data-day": day.date.toLocaleDateString(locale?.code),
		"data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
		"data-range-start": modifiers.range_start,
		"data-range-end": modifiers.range_end,
		"data-range-middle": modifiers.range_middle,
		className: cn$1("relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/checkbox.tsx
function Checkbox$1({ className, ...props }) {
	return /* @__PURE__ */ jsx(Checkbox.Root, {
		"data-slot": "checkbox",
		className: cn$1("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className),
		...props,
		children: /* @__PURE__ */ jsx(Checkbox.Indicator, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
			children: /* @__PURE__ */ jsx(Check, {})
		})
	});
}
//#endregion
//#region node_modules/embla-carousel-reactive-utils/esm/embla-carousel-reactive-utils.esm.js
function isObject$1(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function isRecord(subject) {
	return isObject$1(subject) || Array.isArray(subject);
}
function canUseDOM() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function areOptionsEqual(optionsA, optionsB) {
	const optionsAKeys = Object.keys(optionsA);
	const optionsBKeys = Object.keys(optionsB);
	if (optionsAKeys.length !== optionsBKeys.length) return false;
	if (JSON.stringify(Object.keys(optionsA.breakpoints || {})) !== JSON.stringify(Object.keys(optionsB.breakpoints || {}))) return false;
	return optionsAKeys.every((key) => {
		const valueA = optionsA[key];
		const valueB = optionsB[key];
		if (typeof valueA === "function") return `${valueA}` === `${valueB}`;
		if (!isRecord(valueA) || !isRecord(valueB)) return valueA === valueB;
		return areOptionsEqual(valueA, valueB);
	});
}
function sortAndMapPluginToOptions(plugins) {
	return plugins.concat().sort((a, b) => a.name > b.name ? 1 : -1).map((plugin) => plugin.options);
}
function arePluginsEqual(pluginsA, pluginsB) {
	if (pluginsA.length !== pluginsB.length) return false;
	const optionsA = sortAndMapPluginToOptions(pluginsA);
	const optionsB = sortAndMapPluginToOptions(pluginsB);
	return optionsA.every((optionA, index) => {
		const optionB = optionsB[index];
		return areOptionsEqual(optionA, optionB);
	});
}
//#endregion
//#region node_modules/embla-carousel/esm/embla-carousel.esm.js
function isNumber(subject) {
	return typeof subject === "number";
}
function isString(subject) {
	return typeof subject === "string";
}
function isBoolean(subject) {
	return typeof subject === "boolean";
}
function isObject(subject) {
	return Object.prototype.toString.call(subject) === "[object Object]";
}
function mathAbs(n) {
	return Math.abs(n);
}
function mathSign(n) {
	return Math.sign(n);
}
function deltaAbs(valueB, valueA) {
	return mathAbs(valueB - valueA);
}
function factorAbs(valueB, valueA) {
	if (valueB === 0 || valueA === 0) return 0;
	if (mathAbs(valueB) <= mathAbs(valueA)) return 0;
	return mathAbs(deltaAbs(mathAbs(valueB), mathAbs(valueA)) / valueB);
}
function roundToTwoDecimals(num) {
	return Math.round(num * 100) / 100;
}
function arrayKeys(array) {
	return objectKeys(array).map(Number);
}
function arrayLast(array) {
	return array[arrayLastIndex(array)];
}
function arrayLastIndex(array) {
	return Math.max(0, array.length - 1);
}
function arrayIsLastIndex(array, index) {
	return index === arrayLastIndex(array);
}
function arrayFromNumber(n, startAt = 0) {
	return Array.from(Array(n), (_, i) => startAt + i);
}
function objectKeys(object) {
	return Object.keys(object);
}
function objectsMergeDeep(objectA, objectB) {
	return [objectA, objectB].reduce((mergedObjects, currentObject) => {
		objectKeys(currentObject).forEach((key) => {
			const valueA = mergedObjects[key];
			const valueB = currentObject[key];
			mergedObjects[key] = isObject(valueA) && isObject(valueB) ? objectsMergeDeep(valueA, valueB) : valueB;
		});
		return mergedObjects;
	}, {});
}
function isMouseEvent(evt, ownerWindow) {
	return typeof ownerWindow.MouseEvent !== "undefined" && evt instanceof ownerWindow.MouseEvent;
}
function Alignment(align, viewSize) {
	const predefined = {
		start,
		center,
		end
	};
	function start() {
		return 0;
	}
	function center(n) {
		return end(n) / 2;
	}
	function end(n) {
		return viewSize - n;
	}
	function measure(n, index) {
		if (isString(align)) return predefined[align](n);
		return align(viewSize, n, index);
	}
	return { measure };
}
function EventStore() {
	let listeners = [];
	function add(node, type, handler, options = { passive: true }) {
		let removeListener;
		if ("addEventListener" in node) {
			node.addEventListener(type, handler, options);
			removeListener = () => node.removeEventListener(type, handler, options);
		} else {
			const legacyMediaQueryList = node;
			legacyMediaQueryList.addListener(handler);
			removeListener = () => legacyMediaQueryList.removeListener(handler);
		}
		listeners.push(removeListener);
		return self;
	}
	function clear() {
		listeners = listeners.filter((remove) => remove());
	}
	const self = {
		add,
		clear
	};
	return self;
}
function Animations(ownerDocument, ownerWindow, update, render) {
	const documentVisibleHandler = EventStore();
	const fixedTimeStep = 1e3 / 60;
	let lastTimeStamp = null;
	let accumulatedTime = 0;
	let animationId = 0;
	function init() {
		documentVisibleHandler.add(ownerDocument, "visibilitychange", () => {
			if (ownerDocument.hidden) reset();
		});
	}
	function destroy() {
		stop();
		documentVisibleHandler.clear();
	}
	function animate(timeStamp) {
		if (!animationId) return;
		if (!lastTimeStamp) {
			lastTimeStamp = timeStamp;
			update();
			update();
		}
		const timeElapsed = timeStamp - lastTimeStamp;
		lastTimeStamp = timeStamp;
		accumulatedTime += timeElapsed;
		while (accumulatedTime >= fixedTimeStep) {
			update();
			accumulatedTime -= fixedTimeStep;
		}
		render(accumulatedTime / fixedTimeStep);
		if (animationId) animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function start() {
		if (animationId) return;
		animationId = ownerWindow.requestAnimationFrame(animate);
	}
	function stop() {
		ownerWindow.cancelAnimationFrame(animationId);
		lastTimeStamp = null;
		accumulatedTime = 0;
		animationId = 0;
	}
	function reset() {
		lastTimeStamp = null;
		accumulatedTime = 0;
	}
	return {
		init,
		destroy,
		start,
		stop,
		update,
		render
	};
}
function Axis(axis, contentDirection) {
	const isRightToLeft = contentDirection === "rtl";
	const isVertical = axis === "y";
	const scroll = isVertical ? "y" : "x";
	const cross = isVertical ? "x" : "y";
	const sign = !isVertical && isRightToLeft ? -1 : 1;
	const startEdge = getStartEdge();
	const endEdge = getEndEdge();
	function measureSize(nodeRect) {
		const { height, width } = nodeRect;
		return isVertical ? height : width;
	}
	function getStartEdge() {
		if (isVertical) return "top";
		return isRightToLeft ? "right" : "left";
	}
	function getEndEdge() {
		if (isVertical) return "bottom";
		return isRightToLeft ? "left" : "right";
	}
	function direction(n) {
		return n * sign;
	}
	return {
		scroll,
		cross,
		startEdge,
		endEdge,
		measureSize,
		direction
	};
}
function Limit(min = 0, max = 0) {
	const length = mathAbs(min - max);
	function reachedMin(n) {
		return n < min;
	}
	function reachedMax(n) {
		return n > max;
	}
	function reachedAny(n) {
		return reachedMin(n) || reachedMax(n);
	}
	function constrain(n) {
		if (!reachedAny(n)) return n;
		return reachedMin(n) ? min : max;
	}
	function removeOffset(n) {
		if (!length) return n;
		return n - length * Math.ceil((n - max) / length);
	}
	return {
		length,
		max,
		min,
		constrain,
		reachedAny,
		reachedMax,
		reachedMin,
		removeOffset
	};
}
function Counter(max, start, loop) {
	const { constrain } = Limit(0, max);
	const loopEnd = max + 1;
	let counter = withinLimit(start);
	function withinLimit(n) {
		return !loop ? constrain(n) : mathAbs((loopEnd + n) % loopEnd);
	}
	function get() {
		return counter;
	}
	function set(n) {
		counter = withinLimit(n);
		return self;
	}
	function add(n) {
		return clone().set(get() + n);
	}
	function clone() {
		return Counter(max, get(), loop);
	}
	const self = {
		get,
		set,
		add,
		clone
	};
	return self;
}
function DragHandler(axis, rootNode, ownerDocument, ownerWindow, target, dragTracker, location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, baseFriction, watchDrag) {
	const { cross: crossAxis, direction } = axis;
	const focusNodes = [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	];
	const nonPassiveEvent = { passive: false };
	const initEvents = EventStore();
	const dragEvents = EventStore();
	const goToNextThreshold = Limit(50, 225).constrain(percentOfView.measure(20));
	const snapForceBoost = {
		mouse: 300,
		touch: 400
	};
	const freeForceBoost = {
		mouse: 500,
		touch: 600
	};
	const baseSpeed = dragFree ? 43 : 25;
	let isMoving = false;
	let startScroll = 0;
	let startCross = 0;
	let pointerIsDown = false;
	let preventScroll = false;
	let preventClick = false;
	let isMouse = false;
	function init(emblaApi) {
		if (!watchDrag) return;
		function downIfAllowed(evt) {
			if (isBoolean(watchDrag) || watchDrag(emblaApi, evt)) down(evt);
		}
		const node = rootNode;
		initEvents.add(node, "dragstart", (evt) => evt.preventDefault(), nonPassiveEvent).add(node, "touchmove", () => void 0, nonPassiveEvent).add(node, "touchend", () => void 0).add(node, "touchstart", downIfAllowed).add(node, "mousedown", downIfAllowed).add(node, "touchcancel", up).add(node, "contextmenu", up).add(node, "click", click, true);
	}
	function destroy() {
		initEvents.clear();
		dragEvents.clear();
	}
	function addDragEvents() {
		const node = isMouse ? ownerDocument : rootNode;
		dragEvents.add(node, "touchmove", move, nonPassiveEvent).add(node, "touchend", up).add(node, "mousemove", move, nonPassiveEvent).add(node, "mouseup", up);
	}
	function isFocusNode(node) {
		const nodeName = node.nodeName || "";
		return focusNodes.includes(nodeName);
	}
	function forceBoost() {
		return (dragFree ? freeForceBoost : snapForceBoost)[isMouse ? "mouse" : "touch"];
	}
	function allowedForce(force, targetChanged) {
		const next = index.add(mathSign(force) * -1);
		const baseForce = scrollTarget.byDistance(force, !dragFree).distance;
		if (dragFree || mathAbs(force) < goToNextThreshold) return baseForce;
		if (skipSnaps && targetChanged) return baseForce * .5;
		return scrollTarget.byIndex(next.get(), 0).distance;
	}
	function down(evt) {
		const isMouseEvt = isMouseEvent(evt, ownerWindow);
		isMouse = isMouseEvt;
		preventClick = dragFree && isMouseEvt && !evt.buttons && isMoving;
		isMoving = deltaAbs(target.get(), location.get()) >= 2;
		if (isMouseEvt && evt.button !== 0) return;
		if (isFocusNode(evt.target)) return;
		pointerIsDown = true;
		dragTracker.pointerDown(evt);
		scrollBody.useFriction(0).useDuration(0);
		target.set(location);
		addDragEvents();
		startScroll = dragTracker.readPoint(evt);
		startCross = dragTracker.readPoint(evt, crossAxis);
		eventHandler.emit("pointerDown");
	}
	function move(evt) {
		if (!isMouseEvent(evt, ownerWindow) && evt.touches.length >= 2) return up(evt);
		const lastScroll = dragTracker.readPoint(evt);
		const lastCross = dragTracker.readPoint(evt, crossAxis);
		const diffScroll = deltaAbs(lastScroll, startScroll);
		const diffCross = deltaAbs(lastCross, startCross);
		if (!preventScroll && !isMouse) {
			if (!evt.cancelable) return up(evt);
			preventScroll = diffScroll > diffCross;
			if (!preventScroll) return up(evt);
		}
		const diff = dragTracker.pointerMove(evt);
		if (diffScroll > dragThreshold) preventClick = true;
		scrollBody.useFriction(.3).useDuration(.75);
		animation.start();
		target.add(direction(diff));
		evt.preventDefault();
	}
	function up(evt) {
		const targetChanged = scrollTarget.byDistance(0, false).index !== index.get();
		const rawForce = dragTracker.pointerUp(evt) * forceBoost();
		const force = allowedForce(direction(rawForce), targetChanged);
		const forceFactor = factorAbs(rawForce, force);
		const speed = baseSpeed - 10 * forceFactor;
		const friction = baseFriction + forceFactor / 50;
		preventScroll = false;
		pointerIsDown = false;
		dragEvents.clear();
		scrollBody.useDuration(speed).useFriction(friction);
		scrollTo.distance(force, !dragFree);
		isMouse = false;
		eventHandler.emit("pointerUp");
	}
	function click(evt) {
		if (preventClick) {
			evt.stopPropagation();
			evt.preventDefault();
			preventClick = false;
		}
	}
	function pointerDown() {
		return pointerIsDown;
	}
	return {
		init,
		destroy,
		pointerDown
	};
}
function DragTracker(axis, ownerWindow) {
	const logInterval = 170;
	let startEvent;
	let lastEvent;
	function readTime(evt) {
		return evt.timeStamp;
	}
	function readPoint(evt, evtAxis) {
		const coord = `client${(evtAxis || axis.scroll) === "x" ? "X" : "Y"}`;
		return (isMouseEvent(evt, ownerWindow) ? evt : evt.touches[0])[coord];
	}
	function pointerDown(evt) {
		startEvent = evt;
		lastEvent = evt;
		return readPoint(evt);
	}
	function pointerMove(evt) {
		const diff = readPoint(evt) - readPoint(lastEvent);
		const expired = readTime(evt) - readTime(startEvent) > logInterval;
		lastEvent = evt;
		if (expired) startEvent = evt;
		return diff;
	}
	function pointerUp(evt) {
		if (!startEvent || !lastEvent) return 0;
		const diffDrag = readPoint(lastEvent) - readPoint(startEvent);
		const diffTime = readTime(evt) - readTime(startEvent);
		const expired = readTime(evt) - readTime(lastEvent) > logInterval;
		const force = diffDrag / diffTime;
		return diffTime && !expired && mathAbs(force) > .1 ? force : 0;
	}
	return {
		pointerDown,
		pointerMove,
		pointerUp,
		readPoint
	};
}
function NodeRects() {
	function measure(node) {
		const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = node;
		return {
			top: offsetTop,
			right: offsetLeft + offsetWidth,
			bottom: offsetTop + offsetHeight,
			left: offsetLeft,
			width: offsetWidth,
			height: offsetHeight
		};
	}
	return { measure };
}
function PercentOfView(viewSize) {
	function measure(n) {
		return viewSize * (n / 100);
	}
	return { measure };
}
function ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects) {
	const observeNodes = [container].concat(slides);
	let resizeObserver;
	let containerSize;
	let slideSizes = [];
	let destroyed = false;
	function readSize(node) {
		return axis.measureSize(nodeRects.measure(node));
	}
	function init(emblaApi) {
		if (!watchResize) return;
		containerSize = readSize(container);
		slideSizes = slides.map(readSize);
		function defaultCallback(entries) {
			for (const entry of entries) {
				if (destroyed) return;
				const isContainer = entry.target === container;
				const slideIndex = slides.indexOf(entry.target);
				const lastSize = isContainer ? containerSize : slideSizes[slideIndex];
				if (mathAbs(readSize(isContainer ? container : slides[slideIndex]) - lastSize) >= .5) {
					emblaApi.reInit();
					eventHandler.emit("resize");
					break;
				}
			}
		}
		resizeObserver = new ResizeObserver((entries) => {
			if (isBoolean(watchResize) || watchResize(emblaApi, entries)) defaultCallback(entries);
		});
		ownerWindow.requestAnimationFrame(() => {
			observeNodes.forEach((node) => resizeObserver.observe(node));
		});
	}
	function destroy() {
		destroyed = true;
		if (resizeObserver) resizeObserver.disconnect();
	}
	return {
		init,
		destroy
	};
}
function ScrollBody(location, offsetLocation, previousLocation, target, baseDuration, baseFriction) {
	let scrollVelocity = 0;
	let scrollDirection = 0;
	let scrollDuration = baseDuration;
	let scrollFriction = baseFriction;
	let rawLocation = location.get();
	let rawLocationPrevious = 0;
	function seek() {
		const displacement = target.get() - location.get();
		const isInstant = !scrollDuration;
		let scrollDistance = 0;
		if (isInstant) {
			scrollVelocity = 0;
			previousLocation.set(target);
			location.set(target);
			scrollDistance = displacement;
		} else {
			previousLocation.set(location);
			scrollVelocity += displacement / scrollDuration;
			scrollVelocity *= scrollFriction;
			rawLocation += scrollVelocity;
			location.add(scrollVelocity);
			scrollDistance = rawLocation - rawLocationPrevious;
		}
		scrollDirection = mathSign(scrollDistance);
		rawLocationPrevious = rawLocation;
		return self;
	}
	function settled() {
		return mathAbs(target.get() - offsetLocation.get()) < .001;
	}
	function duration() {
		return scrollDuration;
	}
	function direction() {
		return scrollDirection;
	}
	function velocity() {
		return scrollVelocity;
	}
	function useBaseDuration() {
		return useDuration(baseDuration);
	}
	function useBaseFriction() {
		return useFriction(baseFriction);
	}
	function useDuration(n) {
		scrollDuration = n;
		return self;
	}
	function useFriction(n) {
		scrollFriction = n;
		return self;
	}
	const self = {
		direction,
		duration,
		velocity,
		seek,
		settled,
		useBaseFriction,
		useBaseDuration,
		useFriction,
		useDuration
	};
	return self;
}
function ScrollBounds(limit, location, target, scrollBody, percentOfView) {
	const pullBackThreshold = percentOfView.measure(10);
	const edgeOffsetTolerance = percentOfView.measure(50);
	const frictionLimit = Limit(.1, .99);
	let disabled = false;
	function shouldConstrain() {
		if (disabled) return false;
		if (!limit.reachedAny(target.get())) return false;
		if (!limit.reachedAny(location.get())) return false;
		return true;
	}
	function constrain(pointerDown) {
		if (!shouldConstrain()) return;
		const diffToEdge = mathAbs(limit[limit.reachedMin(location.get()) ? "min" : "max"] - location.get());
		const diffToTarget = target.get() - location.get();
		const friction = frictionLimit.constrain(diffToEdge / edgeOffsetTolerance);
		target.subtract(diffToTarget * friction);
		if (!pointerDown && mathAbs(diffToTarget) < pullBackThreshold) {
			target.set(limit.constrain(target.get()));
			scrollBody.useDuration(25).useBaseFriction();
		}
	}
	function toggleActive(active) {
		disabled = !active;
	}
	return {
		shouldConstrain,
		constrain,
		toggleActive
	};
}
function ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance) {
	const scrollBounds = Limit(-contentSize + viewSize, 0);
	const snapsBounded = measureBounded();
	const scrollContainLimit = findScrollContainLimit();
	const snapsContained = measureContained();
	function usePixelTolerance(bound, snap) {
		return deltaAbs(bound, snap) <= 1;
	}
	function findScrollContainLimit() {
		const startSnap = snapsBounded[0];
		const endSnap = arrayLast(snapsBounded);
		return Limit(snapsBounded.lastIndexOf(startSnap), snapsBounded.indexOf(endSnap) + 1);
	}
	function measureBounded() {
		return snapsAligned.map((snapAligned, index) => {
			const { min, max } = scrollBounds;
			const snap = scrollBounds.constrain(snapAligned);
			const isFirst = !index;
			const isLast = arrayIsLastIndex(snapsAligned, index);
			if (isFirst) return max;
			if (isLast) return min;
			if (usePixelTolerance(min, snap)) return min;
			if (usePixelTolerance(max, snap)) return max;
			return snap;
		}).map((scrollBound) => parseFloat(scrollBound.toFixed(3)));
	}
	function measureContained() {
		if (contentSize <= viewSize + pixelTolerance) return [scrollBounds.max];
		if (containScroll === "keepSnaps") return snapsBounded;
		const { min, max } = scrollContainLimit;
		return snapsBounded.slice(min, max);
	}
	return {
		snapsContained,
		scrollContainLimit
	};
}
function ScrollLimit(contentSize, scrollSnaps, loop) {
	const max = scrollSnaps[0];
	return { limit: Limit(loop ? max - contentSize : arrayLast(scrollSnaps), max) };
}
function ScrollLooper(contentSize, limit, location, vectors) {
	const jointSafety = .1;
	const { reachedMin, reachedMax } = Limit(limit.min + jointSafety, limit.max + jointSafety);
	function shouldLoop(direction) {
		if (direction === 1) return reachedMax(location.get());
		if (direction === -1) return reachedMin(location.get());
		return false;
	}
	function loop(direction) {
		if (!shouldLoop(direction)) return;
		const loopDistance = contentSize * (direction * -1);
		vectors.forEach((v) => v.add(loopDistance));
	}
	return { loop };
}
function ScrollProgress(limit) {
	const { max, length } = limit;
	function get(n) {
		const currentLocation = n - max;
		return length ? currentLocation / -length : 0;
	}
	return { get };
}
function ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll) {
	const { startEdge, endEdge } = axis;
	const { groupSlides } = slidesToScroll;
	const alignments = measureSizes().map(alignment.measure);
	const snaps = measureUnaligned();
	const snapsAligned = measureAligned();
	function measureSizes() {
		return groupSlides(slideRects).map((rects) => arrayLast(rects)[endEdge] - rects[0][startEdge]).map(mathAbs);
	}
	function measureUnaligned() {
		return slideRects.map((rect) => containerRect[startEdge] - rect[startEdge]).map((snap) => -mathAbs(snap));
	}
	function measureAligned() {
		return groupSlides(snaps).map((g) => g[0]).map((snap, index) => snap + alignments[index]);
	}
	return {
		snaps,
		snapsAligned
	};
}
function SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes) {
	const { groupSlides } = slidesToScroll;
	const { min, max } = scrollContainLimit;
	const slideRegistry = createSlideRegistry();
	function createSlideRegistry() {
		const groupedSlideIndexes = groupSlides(slideIndexes);
		const doNotContain = !containSnaps || containScroll === "keepSnaps";
		if (scrollSnaps.length === 1) return [slideIndexes];
		if (doNotContain) return groupedSlideIndexes;
		return groupedSlideIndexes.slice(min, max).map((group, index, groups) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(groups, index);
			if (isFirst) return arrayFromNumber(arrayLast(groups[0]) + 1);
			if (isLast) return arrayFromNumber(arrayLastIndex(slideIndexes) - arrayLast(groups)[0] + 1, arrayLast(groups)[0]);
			return group;
		});
	}
	return { slideRegistry };
}
function ScrollTarget(loop, scrollSnaps, contentSize, limit, targetVector) {
	const { reachedAny, removeOffset, constrain } = limit;
	function minDistance(distances) {
		return distances.concat().sort((a, b) => mathAbs(a) - mathAbs(b))[0];
	}
	function findTargetSnap(target) {
		const distance = loop ? removeOffset(target) : constrain(target);
		const { index } = scrollSnaps.map((snap, index) => ({
			diff: shortcut(snap - distance, 0),
			index
		})).sort((d1, d2) => mathAbs(d1.diff) - mathAbs(d2.diff))[0];
		return {
			index,
			distance
		};
	}
	function shortcut(target, direction) {
		const targets = [
			target,
			target + contentSize,
			target - contentSize
		];
		if (!loop) return target;
		if (!direction) return minDistance(targets);
		const matchingTargets = targets.filter((t) => mathSign(t) === direction);
		if (matchingTargets.length) return minDistance(matchingTargets);
		return arrayLast(targets) - contentSize;
	}
	function byIndex(index, direction) {
		return {
			index,
			distance: shortcut(scrollSnaps[index] - targetVector.get(), direction)
		};
	}
	function byDistance(distance, snap) {
		const target = targetVector.get() + distance;
		const { index, distance: targetSnapDistance } = findTargetSnap(target);
		const reachedBound = !loop && reachedAny(target);
		if (!snap || reachedBound) return {
			index,
			distance
		};
		return {
			index,
			distance: distance + shortcut(scrollSnaps[index] - targetSnapDistance, 0)
		};
	}
	return {
		byDistance,
		byIndex,
		shortcut
	};
}
function ScrollTo(animation, indexCurrent, indexPrevious, scrollBody, scrollTarget, targetVector, eventHandler) {
	function scrollTo(target) {
		const distanceDiff = target.distance;
		const indexDiff = target.index !== indexCurrent.get();
		targetVector.add(distanceDiff);
		if (distanceDiff) if (scrollBody.duration()) animation.start();
		else {
			animation.update();
			animation.render(1);
			animation.update();
		}
		if (indexDiff) {
			indexPrevious.set(indexCurrent.get());
			indexCurrent.set(target.index);
			eventHandler.emit("select");
		}
	}
	function distance(n, snap) {
		scrollTo(scrollTarget.byDistance(n, snap));
	}
	function index(n, direction) {
		const targetIndex = indexCurrent.clone().set(n);
		scrollTo(scrollTarget.byIndex(targetIndex.get(), direction));
	}
	return {
		distance,
		index
	};
}
function SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus) {
	const focusListenerOptions = {
		passive: true,
		capture: true
	};
	let lastTabPressTime = 0;
	function init(emblaApi) {
		if (!watchFocus) return;
		function defaultCallback(index) {
			if ((/* @__PURE__ */ new Date()).getTime() - lastTabPressTime > 10) return;
			eventHandler.emit("slideFocusStart");
			root.scrollLeft = 0;
			const group = slideRegistry.findIndex((group) => group.includes(index));
			if (!isNumber(group)) return;
			scrollBody.useDuration(0);
			scrollTo.index(group, 0);
			eventHandler.emit("slideFocus");
		}
		eventStore.add(document, "keydown", registerTabPress, false);
		slides.forEach((slide, slideIndex) => {
			eventStore.add(slide, "focus", (evt) => {
				if (isBoolean(watchFocus) || watchFocus(emblaApi, evt)) defaultCallback(slideIndex);
			}, focusListenerOptions);
		});
	}
	function registerTabPress(event) {
		if (event.code === "Tab") lastTabPressTime = (/* @__PURE__ */ new Date()).getTime();
	}
	return { init };
}
function Vector1D(initialValue) {
	let value = initialValue;
	function get() {
		return value;
	}
	function set(n) {
		value = normalizeInput(n);
	}
	function add(n) {
		value += normalizeInput(n);
	}
	function subtract(n) {
		value -= normalizeInput(n);
	}
	function normalizeInput(n) {
		return isNumber(n) ? n : n.get();
	}
	return {
		get,
		set,
		add,
		subtract
	};
}
function Translate(axis, container) {
	const translate = axis.scroll === "x" ? x : y;
	const containerStyle = container.style;
	let previousTarget = null;
	let disabled = false;
	function x(n) {
		return `translate3d(${n}px,0px,0px)`;
	}
	function y(n) {
		return `translate3d(0px,${n}px,0px)`;
	}
	function to(target) {
		if (disabled) return;
		const newTarget = roundToTwoDecimals(axis.direction(target));
		if (newTarget === previousTarget) return;
		containerStyle.transform = translate(newTarget);
		previousTarget = newTarget;
	}
	function toggleActive(active) {
		disabled = !active;
	}
	function clear() {
		if (disabled) return;
		containerStyle.transform = "";
		if (!container.getAttribute("style")) container.removeAttribute("style");
	}
	return {
		clear,
		to,
		toggleActive
	};
}
function SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, location, slides) {
	const roundingSafety = .5;
	const ascItems = arrayKeys(slideSizesWithGaps);
	const descItems = arrayKeys(slideSizesWithGaps).reverse();
	const loopPoints = startPoints().concat(endPoints());
	function removeSlideSizes(indexes, from) {
		return indexes.reduce((a, i) => {
			return a - slideSizesWithGaps[i];
		}, from);
	}
	function slidesInGap(indexes, gap) {
		return indexes.reduce((a, i) => {
			return removeSlideSizes(a, gap) > 0 ? a.concat([i]) : a;
		}, []);
	}
	function findSlideBounds(offset) {
		return snaps.map((snap, index) => ({
			start: snap - slideSizes[index] + roundingSafety + offset,
			end: snap + viewSize - roundingSafety + offset
		}));
	}
	function findLoopPoints(indexes, offset, isEndEdge) {
		const slideBounds = findSlideBounds(offset);
		return indexes.map((index) => {
			const initial = isEndEdge ? 0 : -contentSize;
			const altered = isEndEdge ? contentSize : 0;
			const boundEdge = isEndEdge ? "end" : "start";
			const loopPoint = slideBounds[index][boundEdge];
			return {
				index,
				loopPoint,
				slideLocation: Vector1D(-1),
				translate: Translate(axis, slides[index]),
				target: () => location.get() > loopPoint ? initial : altered
			};
		});
	}
	function startPoints() {
		const gap = scrollSnaps[0];
		return findLoopPoints(slidesInGap(descItems, gap), contentSize, false);
	}
	function endPoints() {
		return findLoopPoints(slidesInGap(ascItems, viewSize - scrollSnaps[0] - 1), -contentSize, true);
	}
	function canLoop() {
		return loopPoints.every(({ index }) => {
			return removeSlideSizes(ascItems.filter((i) => i !== index), viewSize) <= .1;
		});
	}
	function loop() {
		loopPoints.forEach((loopPoint) => {
			const { target, translate, slideLocation } = loopPoint;
			const shiftLocation = target();
			if (shiftLocation === slideLocation.get()) return;
			translate.to(shiftLocation);
			slideLocation.set(shiftLocation);
		});
	}
	function clear() {
		loopPoints.forEach((loopPoint) => loopPoint.translate.clear());
	}
	return {
		canLoop,
		clear,
		loop,
		loopPoints
	};
}
function SlidesHandler(container, eventHandler, watchSlides) {
	let mutationObserver;
	let destroyed = false;
	function init(emblaApi) {
		if (!watchSlides) return;
		function defaultCallback(mutations) {
			for (const mutation of mutations) if (mutation.type === "childList") {
				emblaApi.reInit();
				eventHandler.emit("slidesChanged");
				break;
			}
		}
		mutationObserver = new MutationObserver((mutations) => {
			if (destroyed) return;
			if (isBoolean(watchSlides) || watchSlides(emblaApi, mutations)) defaultCallback(mutations);
		});
		mutationObserver.observe(container, { childList: true });
	}
	function destroy() {
		if (mutationObserver) mutationObserver.disconnect();
		destroyed = true;
	}
	return {
		init,
		destroy
	};
}
function SlidesInView(container, slides, eventHandler, threshold) {
	const intersectionEntryMap = {};
	let inViewCache = null;
	let notInViewCache = null;
	let intersectionObserver;
	let destroyed = false;
	function init() {
		intersectionObserver = new IntersectionObserver((entries) => {
			if (destroyed) return;
			entries.forEach((entry) => {
				const index = slides.indexOf(entry.target);
				intersectionEntryMap[index] = entry;
			});
			inViewCache = null;
			notInViewCache = null;
			eventHandler.emit("slidesInView");
		}, {
			root: container.parentElement,
			threshold
		});
		slides.forEach((slide) => intersectionObserver.observe(slide));
	}
	function destroy() {
		if (intersectionObserver) intersectionObserver.disconnect();
		destroyed = true;
	}
	function createInViewList(inView) {
		return objectKeys(intersectionEntryMap).reduce((list, slideIndex) => {
			const index = parseInt(slideIndex);
			const { isIntersecting } = intersectionEntryMap[index];
			if (inView && isIntersecting || !inView && !isIntersecting) list.push(index);
			return list;
		}, []);
	}
	function get(inView = true) {
		if (inView && inViewCache) return inViewCache;
		if (!inView && notInViewCache) return notInViewCache;
		const slideIndexes = createInViewList(inView);
		if (inView) inViewCache = slideIndexes;
		if (!inView) notInViewCache = slideIndexes;
		return slideIndexes;
	}
	return {
		init,
		destroy,
		get
	};
}
function SlideSizes(axis, containerRect, slideRects, slides, readEdgeGap, ownerWindow) {
	const { measureSize, startEdge, endEdge } = axis;
	const withEdgeGap = slideRects[0] && readEdgeGap;
	const startGap = measureStartGap();
	const endGap = measureEndGap();
	const slideSizes = slideRects.map(measureSize);
	const slideSizesWithGaps = measureWithGaps();
	function measureStartGap() {
		if (!withEdgeGap) return 0;
		const slideRect = slideRects[0];
		return mathAbs(containerRect[startEdge] - slideRect[startEdge]);
	}
	function measureEndGap() {
		if (!withEdgeGap) return 0;
		const style = ownerWindow.getComputedStyle(arrayLast(slides));
		return parseFloat(style.getPropertyValue(`margin-${endEdge}`));
	}
	function measureWithGaps() {
		return slideRects.map((rect, index, rects) => {
			const isFirst = !index;
			const isLast = arrayIsLastIndex(rects, index);
			if (isFirst) return slideSizes[index] + startGap;
			if (isLast) return slideSizes[index] + endGap;
			return rects[index + 1][startEdge] - rect[startEdge];
		}).map(mathAbs);
	}
	return {
		slideSizes,
		slideSizesWithGaps,
		startGap,
		endGap
	};
}
function SlidesToScroll(axis, viewSize, slidesToScroll, loop, containerRect, slideRects, startGap, endGap, pixelTolerance) {
	const { startEdge, endEdge, direction } = axis;
	const groupByNumber = isNumber(slidesToScroll);
	function byNumber(array, groupSize) {
		return arrayKeys(array).filter((i) => i % groupSize === 0).map((i) => array.slice(i, i + groupSize));
	}
	function bySize(array) {
		if (!array.length) return [];
		return arrayKeys(array).reduce((groups, rectB, index) => {
			const rectA = arrayLast(groups) || 0;
			const isFirst = rectA === 0;
			const isLast = rectB === arrayLastIndex(array);
			const edgeA = containerRect[startEdge] - slideRects[rectA][startEdge];
			const edgeB = containerRect[startEdge] - slideRects[rectB][endEdge];
			const gapA = !loop && isFirst ? direction(startGap) : 0;
			const chunkSize = mathAbs(edgeB - (!loop && isLast ? direction(endGap) : 0) - (edgeA + gapA));
			if (index && chunkSize > viewSize + pixelTolerance) groups.push(rectB);
			if (isLast) groups.push(array.length);
			return groups;
		}, []).map((currentSize, index, groups) => {
			const previousSize = Math.max(groups[index - 1] || 0);
			return array.slice(previousSize, currentSize);
		});
	}
	function groupSlides(array) {
		return groupByNumber ? byNumber(array, slidesToScroll) : bySize(array);
	}
	return { groupSlides };
}
function Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler) {
	const { align, axis: scrollAxis, direction, startIndex, loop, duration, dragFree, dragThreshold, inViewThreshold, slidesToScroll: groupSlides, skipSnaps, containScroll, watchResize, watchSlides, watchDrag, watchFocus } = options;
	const pixelTolerance = 2;
	const nodeRects = NodeRects();
	const containerRect = nodeRects.measure(container);
	const slideRects = slides.map(nodeRects.measure);
	const axis = Axis(scrollAxis, direction);
	const viewSize = axis.measureSize(containerRect);
	const percentOfView = PercentOfView(viewSize);
	const alignment = Alignment(align, viewSize);
	const containSnaps = !loop && !!containScroll;
	const { slideSizes, slideSizesWithGaps, startGap, endGap } = SlideSizes(axis, containerRect, slideRects, slides, loop || !!containScroll, ownerWindow);
	const slidesToScroll = SlidesToScroll(axis, viewSize, groupSlides, loop, containerRect, slideRects, startGap, endGap, pixelTolerance);
	const { snaps, snapsAligned } = ScrollSnaps(axis, alignment, containerRect, slideRects, slidesToScroll);
	const contentSize = -arrayLast(snaps) + arrayLast(slideSizesWithGaps);
	const { snapsContained, scrollContainLimit } = ScrollContain(viewSize, contentSize, snapsAligned, containScroll, pixelTolerance);
	const scrollSnaps = containSnaps ? snapsContained : snapsAligned;
	const { limit } = ScrollLimit(contentSize, scrollSnaps, loop);
	const index = Counter(arrayLastIndex(scrollSnaps), startIndex, loop);
	const indexPrevious = index.clone();
	const slideIndexes = arrayKeys(slides);
	const update = ({ dragHandler, scrollBody, scrollBounds, options: { loop } }) => {
		if (!loop) scrollBounds.constrain(dragHandler.pointerDown());
		scrollBody.seek();
	};
	const render = ({ scrollBody, translate, location, offsetLocation, previousLocation, scrollLooper, slideLooper, dragHandler, animation, eventHandler, scrollBounds, options: { loop } }, alpha) => {
		const shouldSettle = scrollBody.settled();
		const withinBounds = !scrollBounds.shouldConstrain();
		const hasSettled = loop ? shouldSettle : shouldSettle && withinBounds;
		const hasSettledAndIdle = hasSettled && !dragHandler.pointerDown();
		if (hasSettledAndIdle) animation.stop();
		const interpolatedLocation = location.get() * alpha + previousLocation.get() * (1 - alpha);
		offsetLocation.set(interpolatedLocation);
		if (loop) {
			scrollLooper.loop(scrollBody.direction());
			slideLooper.loop();
		}
		translate.to(offsetLocation.get());
		if (hasSettledAndIdle) eventHandler.emit("settle");
		if (!hasSettled) eventHandler.emit("scroll");
	};
	const animation = Animations(ownerDocument, ownerWindow, () => update(engine), (alpha) => render(engine, alpha));
	const friction = .68;
	const startLocation = scrollSnaps[index.get()];
	const location = Vector1D(startLocation);
	const previousLocation = Vector1D(startLocation);
	const offsetLocation = Vector1D(startLocation);
	const target = Vector1D(startLocation);
	const scrollBody = ScrollBody(location, offsetLocation, previousLocation, target, duration, friction);
	const scrollTarget = ScrollTarget(loop, scrollSnaps, contentSize, limit, target);
	const scrollTo = ScrollTo(animation, index, indexPrevious, scrollBody, scrollTarget, target, eventHandler);
	const scrollProgress = ScrollProgress(limit);
	const eventStore = EventStore();
	const slidesInView = SlidesInView(container, slides, eventHandler, inViewThreshold);
	const { slideRegistry } = SlideRegistry(containSnaps, containScroll, scrollSnaps, scrollContainLimit, slidesToScroll, slideIndexes);
	const slideFocus = SlideFocus(root, slides, slideRegistry, scrollTo, scrollBody, eventStore, eventHandler, watchFocus);
	const engine = {
		ownerDocument,
		ownerWindow,
		eventHandler,
		containerRect,
		slideRects,
		animation,
		axis,
		dragHandler: DragHandler(axis, root, ownerDocument, ownerWindow, target, DragTracker(axis, ownerWindow), location, animation, scrollTo, scrollBody, scrollTarget, index, eventHandler, percentOfView, dragFree, dragThreshold, skipSnaps, friction, watchDrag),
		eventStore,
		percentOfView,
		index,
		indexPrevious,
		limit,
		location,
		offsetLocation,
		previousLocation,
		options,
		resizeHandler: ResizeHandler(container, eventHandler, ownerWindow, slides, axis, watchResize, nodeRects),
		scrollBody,
		scrollBounds: ScrollBounds(limit, offsetLocation, target, scrollBody, percentOfView),
		scrollLooper: ScrollLooper(contentSize, limit, offsetLocation, [
			location,
			offsetLocation,
			previousLocation,
			target
		]),
		scrollProgress,
		scrollSnapList: scrollSnaps.map(scrollProgress.get),
		scrollSnaps,
		scrollTarget,
		scrollTo,
		slideLooper: SlideLooper(axis, viewSize, contentSize, slideSizes, slideSizesWithGaps, snaps, scrollSnaps, offsetLocation, slides),
		slideFocus,
		slidesHandler: SlidesHandler(container, eventHandler, watchSlides),
		slidesInView,
		slideIndexes,
		slideRegistry,
		slidesToScroll,
		target,
		translate: Translate(axis, container)
	};
	return engine;
}
function EventHandler() {
	let listeners = {};
	let api;
	function init(emblaApi) {
		api = emblaApi;
	}
	function getListeners(evt) {
		return listeners[evt] || [];
	}
	function emit(evt) {
		getListeners(evt).forEach((e) => e(api, evt));
		return self;
	}
	function on(evt, cb) {
		listeners[evt] = getListeners(evt).concat([cb]);
		return self;
	}
	function off(evt, cb) {
		listeners[evt] = getListeners(evt).filter((e) => e !== cb);
		return self;
	}
	function clear() {
		listeners = {};
	}
	const self = {
		init,
		emit,
		off,
		on,
		clear
	};
	return self;
}
var defaultOptions = {
	align: "center",
	axis: "x",
	container: null,
	slides: null,
	containScroll: "trimSnaps",
	direction: "ltr",
	slidesToScroll: 1,
	inViewThreshold: 0,
	breakpoints: {},
	dragFree: false,
	dragThreshold: 10,
	loop: false,
	skipSnaps: false,
	duration: 25,
	startIndex: 0,
	active: true,
	watchDrag: true,
	watchResize: true,
	watchSlides: true,
	watchFocus: true
};
function OptionsHandler(ownerWindow) {
	function mergeOptions(optionsA, optionsB) {
		return objectsMergeDeep(optionsA, optionsB || {});
	}
	function optionsAtMedia(options) {
		const optionsAtMedia = options.breakpoints || {};
		return mergeOptions(options, objectKeys(optionsAtMedia).filter((media) => ownerWindow.matchMedia(media).matches).map((media) => optionsAtMedia[media]).reduce((a, mediaOption) => mergeOptions(a, mediaOption), {}));
	}
	function optionsMediaQueries(optionsList) {
		return optionsList.map((options) => objectKeys(options.breakpoints || {})).reduce((acc, mediaQueries) => acc.concat(mediaQueries), []).map(ownerWindow.matchMedia);
	}
	return {
		mergeOptions,
		optionsAtMedia,
		optionsMediaQueries
	};
}
function PluginsHandler(optionsHandler) {
	let activePlugins = [];
	function init(emblaApi, plugins) {
		activePlugins = plugins.filter(({ options }) => optionsHandler.optionsAtMedia(options).active !== false);
		activePlugins.forEach((plugin) => plugin.init(emblaApi, optionsHandler));
		return plugins.reduce((map, plugin) => Object.assign(map, { [plugin.name]: plugin }), {});
	}
	function destroy() {
		activePlugins = activePlugins.filter((plugin) => plugin.destroy());
	}
	return {
		init,
		destroy
	};
}
function EmblaCarousel(root, userOptions, userPlugins) {
	const ownerDocument = root.ownerDocument;
	const ownerWindow = ownerDocument.defaultView;
	const optionsHandler = OptionsHandler(ownerWindow);
	const pluginsHandler = PluginsHandler(optionsHandler);
	const mediaHandlers = EventStore();
	const eventHandler = EventHandler();
	const { mergeOptions, optionsAtMedia, optionsMediaQueries } = optionsHandler;
	const { on, off, emit } = eventHandler;
	const reInit = reActivate;
	let destroyed = false;
	let engine;
	let optionsBase = mergeOptions(defaultOptions, EmblaCarousel.globalOptions);
	let options = mergeOptions(optionsBase);
	let pluginList = [];
	let pluginApis;
	let container;
	let slides;
	function storeElements() {
		const { container: userContainer, slides: userSlides } = options;
		container = (isString(userContainer) ? root.querySelector(userContainer) : userContainer) || root.children[0];
		const customSlides = isString(userSlides) ? container.querySelectorAll(userSlides) : userSlides;
		slides = [].slice.call(customSlides || container.children);
	}
	function createEngine(options) {
		const engine = Engine(root, container, slides, ownerDocument, ownerWindow, options, eventHandler);
		if (options.loop && !engine.slideLooper.canLoop()) return createEngine(Object.assign({}, options, { loop: false }));
		return engine;
	}
	function activate(withOptions, withPlugins) {
		if (destroyed) return;
		optionsBase = mergeOptions(optionsBase, withOptions);
		options = optionsAtMedia(optionsBase);
		pluginList = withPlugins || pluginList;
		storeElements();
		engine = createEngine(options);
		optionsMediaQueries([optionsBase, ...pluginList.map(({ options }) => options)]).forEach((query) => mediaHandlers.add(query, "change", reActivate));
		if (!options.active) return;
		engine.translate.to(engine.location.get());
		engine.animation.init();
		engine.slidesInView.init();
		engine.slideFocus.init(self);
		engine.eventHandler.init(self);
		engine.resizeHandler.init(self);
		engine.slidesHandler.init(self);
		if (engine.options.loop) engine.slideLooper.loop();
		if (container.offsetParent && slides.length) engine.dragHandler.init(self);
		pluginApis = pluginsHandler.init(self, pluginList);
	}
	function reActivate(withOptions, withPlugins) {
		const startIndex = selectedScrollSnap();
		deActivate();
		activate(mergeOptions({ startIndex }, withOptions), withPlugins);
		eventHandler.emit("reInit");
	}
	function deActivate() {
		engine.dragHandler.destroy();
		engine.eventStore.clear();
		engine.translate.clear();
		engine.slideLooper.clear();
		engine.resizeHandler.destroy();
		engine.slidesHandler.destroy();
		engine.slidesInView.destroy();
		engine.animation.destroy();
		pluginsHandler.destroy();
		mediaHandlers.clear();
	}
	function destroy() {
		if (destroyed) return;
		destroyed = true;
		mediaHandlers.clear();
		deActivate();
		eventHandler.emit("destroy");
		eventHandler.clear();
	}
	function scrollTo(index, jump, direction) {
		if (!options.active || destroyed) return;
		engine.scrollBody.useBaseFriction().useDuration(jump === true ? 0 : options.duration);
		engine.scrollTo.index(index, direction || 0);
	}
	function scrollNext(jump) {
		scrollTo(engine.index.add(1).get(), jump, -1);
	}
	function scrollPrev(jump) {
		scrollTo(engine.index.add(-1).get(), jump, 1);
	}
	function canScrollNext() {
		return engine.index.add(1).get() !== selectedScrollSnap();
	}
	function canScrollPrev() {
		return engine.index.add(-1).get() !== selectedScrollSnap();
	}
	function scrollSnapList() {
		return engine.scrollSnapList;
	}
	function scrollProgress() {
		return engine.scrollProgress.get(engine.offsetLocation.get());
	}
	function selectedScrollSnap() {
		return engine.index.get();
	}
	function previousScrollSnap() {
		return engine.indexPrevious.get();
	}
	function slidesInView() {
		return engine.slidesInView.get();
	}
	function slidesNotInView() {
		return engine.slidesInView.get(false);
	}
	function plugins() {
		return pluginApis;
	}
	function internalEngine() {
		return engine;
	}
	function rootNode() {
		return root;
	}
	function containerNode() {
		return container;
	}
	function slideNodes() {
		return slides;
	}
	const self = {
		canScrollNext,
		canScrollPrev,
		containerNode,
		internalEngine,
		destroy,
		off,
		on,
		emit,
		plugins,
		previousScrollSnap,
		reInit,
		rootNode,
		scrollNext,
		scrollPrev,
		scrollProgress,
		scrollSnapList,
		scrollTo,
		selectedScrollSnap,
		slideNodes,
		slidesInView,
		slidesNotInView
	};
	activate(userOptions, userPlugins);
	setTimeout(() => eventHandler.emit("init"), 0);
	return self;
}
EmblaCarousel.globalOptions = void 0;
//#endregion
//#region node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js
function useEmblaCarousel(options = {}, plugins = []) {
	const storedOptions = useRef(options);
	const storedPlugins = useRef(plugins);
	const [emblaApi, setEmblaApi] = useState();
	const [viewport, setViewport] = useState();
	const reInit = useCallback(() => {
		if (emblaApi) emblaApi.reInit(storedOptions.current, storedPlugins.current);
	}, [emblaApi]);
	useEffect(() => {
		if (areOptionsEqual(storedOptions.current, options)) return;
		storedOptions.current = options;
		reInit();
	}, [options, reInit]);
	useEffect(() => {
		if (arePluginsEqual(storedPlugins.current, plugins)) return;
		storedPlugins.current = plugins;
		reInit();
	}, [plugins, reInit]);
	useEffect(() => {
		if (canUseDOM() && viewport) {
			EmblaCarousel.globalOptions = useEmblaCarousel.globalOptions;
			const newEmblaApi = EmblaCarousel(viewport, storedOptions.current, storedPlugins.current);
			setEmblaApi(newEmblaApi);
			return () => newEmblaApi.destroy();
		} else setEmblaApi(void 0);
	}, [viewport, setEmblaApi]);
	return [setViewport, emblaApi];
}
useEmblaCarousel.globalOptions = void 0;
//#endregion
//#region src/components/shadcn/ui/carousel.tsx
var CarouselContext = React$1.createContext(null);
function useCarousel() {
	const context = React$1.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React$1.useState(false);
	const [canScrollNext, setCanScrollNext] = React$1.useState(false);
	const onSelect = React$1.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React$1.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React$1.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React$1.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React$1.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React$1.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			onKeyDownCapture: handleKeyDown,
			className: cn$1("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			"data-slot": "carousel",
			...props,
			children
		})
	});
}
function CarouselContent({ className, ...props }) {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		"data-slot": "carousel-content",
		children: /* @__PURE__ */ jsx("div", {
			className: cn$1("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
}
function CarouselItem({ className, ...props }) {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"aria-roledescription": "slide",
		"data-slot": "carousel-item",
		className: cn$1("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
}
function CarouselPrevious({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button$2, {
		"data-slot": "carousel-previous",
		variant,
		size,
		className: cn$1("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronLeft, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
}
function CarouselNext({ className, variant = "outline", size = "icon-sm", ...props }) {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button$2, {
		"data-slot": "carousel-next",
		variant,
		size,
		className: cn$1("absolute touch-manipulation rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ChevronRight, {}), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
}
//#endregion
//#region src/components/shadcn/ui/select.tsx
var Select$1 = Select.Root;
function SelectGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.Group, {
		"data-slot": "select-group",
		className: cn$1(className),
		...props
	});
}
function SelectValue({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.Value, {
		"data-slot": "select-value",
		className: cn$1("line-clamp-1 flex items-center gap-2", className),
		...props
	});
}
function SelectTrigger({ className, size = "default", children, ...props }) {
	return /* @__PURE__ */ jsxs(Select.Trigger, {
		"data-slot": "select-trigger",
		"data-size": size,
		className: cn$1("flex w-fit min-w-0 items-center justify-between gap-2 whitespace-nowrap rounded-lg border border-input bg-background px-2.5 text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-placeholder:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 dark:bg-input/30", size === "default" && "h-8", size === "sm" && "h-7 text-xs", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Select.Icon, { children: /* @__PURE__ */ jsx(ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground opacity-50" }) })]
	});
}
function SelectContent({ className, children, side = "bottom", sideOffset = 4, align = "center", alignOffset = 0, alignItemWithTrigger = true, ...props }) {
	return /* @__PURE__ */ jsx(Select.Portal, { children: /* @__PURE__ */ jsx(Select.Positioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		alignItemWithTrigger,
		className: "isolate z-50",
		children: /* @__PURE__ */ jsxs(Select.Popup, {
			"data-slot": "select-content",
			"data-align-trigger": alignItemWithTrigger,
			className: cn$1("relative isolate z-50 max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props,
			children: [
				/* @__PURE__ */ jsx(SelectScrollUpButton, {}),
				/* @__PURE__ */ jsx(Select.List, {
					className: cn$1("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1"),
					children
				}),
				/* @__PURE__ */ jsx(SelectScrollDownButton, {})
			]
		})
	}) });
}
function SelectLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.GroupLabel, {
		"data-slot": "select-label",
		className: cn$1("px-2 py-1.5 text-xs text-muted-foreground", className),
		...props
	});
}
function SelectItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Select.Item, {
		"data-slot": "select-item",
		className: cn$1("relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [/* @__PURE__ */ jsx(Select.ItemText, {
			className: "shrink-0 whitespace-nowrap",
			children
		}), /* @__PURE__ */ jsx(Select.ItemIndicator, {
			render: /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ jsx(Check, { className: "pointer-events-none size-4" })
		})]
	});
}
function SelectSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.Separator, {
		"data-slot": "select-separator",
		className: cn$1("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function SelectScrollUpButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.ScrollUpArrow, {
		"data-slot": "select-scroll-up-button",
		className: cn$1("flex w-full cursor-default items-center justify-center py-1 text-muted-foreground", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronUp, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className, ...props }) {
	return /* @__PURE__ */ jsx(Select.ScrollDownArrow, {
		"data-slot": "select-scroll-down-button",
		className: cn$1("flex w-full cursor-default items-center justify-center py-1 text-muted-foreground", className),
		...props,
		children: /* @__PURE__ */ jsx(ChevronDown, { className: "size-4" })
	});
}
//#endregion
//#region src/components/shadcn/ui/input.tsx
function Input$1({ className, type, ...props }) {
	return /* @__PURE__ */ jsx(Input, {
		type,
		"data-slot": "input",
		className: cn$1("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
		...props
	});
}
//#endregion
//#region node_modules/sonner/dist/index.mjs
function __insertCSS(code) {
	if (!code || typeof document == "undefined") return;
	let head = document.head || document.getElementsByTagName("head")[0];
	let style = document.createElement("style");
	style.type = "text/css";
	head.appendChild(style);
	style.styleSheet ? style.styleSheet.cssText = code : style.appendChild(document.createTextNode(code));
}
var getAsset = (type) => {
	switch (type) {
		case "success": return SuccessIcon;
		case "info": return InfoIcon;
		case "warning": return WarningIcon;
		case "error": return ErrorIcon;
		default: return null;
	}
};
var bars = Array(12).fill(0);
var Loader = ({ visible, className }) => {
	return /* @__PURE__ */ React.createElement("div", {
		className: ["sonner-loading-wrapper", className].filter(Boolean).join(" "),
		"data-visible": visible
	}, /* @__PURE__ */ React.createElement("div", { className: "sonner-spinner" }, bars.map((_, i) => /* @__PURE__ */ React.createElement("div", {
		className: "sonner-loading-bar",
		key: `spinner-bar-${i}`
	}))));
};
var SuccessIcon = /* @__PURE__ */ React.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /* @__PURE__ */ React.createElement("path", {
	fillRule: "evenodd",
	d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
	clipRule: "evenodd"
}));
var WarningIcon = /* @__PURE__ */ React.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /* @__PURE__ */ React.createElement("path", {
	fillRule: "evenodd",
	d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
	clipRule: "evenodd"
}));
var InfoIcon = /* @__PURE__ */ React.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /* @__PURE__ */ React.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
	clipRule: "evenodd"
}));
var ErrorIcon = /* @__PURE__ */ React.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 20 20",
	fill: "currentColor",
	height: "20",
	width: "20"
}, /* @__PURE__ */ React.createElement("path", {
	fillRule: "evenodd",
	d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
	clipRule: "evenodd"
}));
var CloseIcon = /* @__PURE__ */ React.createElement("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "12",
	height: "12",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	strokeLinecap: "round",
	strokeLinejoin: "round"
}, /* @__PURE__ */ React.createElement("line", {
	x1: "18",
	y1: "6",
	x2: "6",
	y2: "18"
}), /* @__PURE__ */ React.createElement("line", {
	x1: "6",
	y1: "6",
	x2: "18",
	y2: "18"
}));
var useIsDocumentHidden = () => {
	const [isDocumentHidden, setIsDocumentHidden] = React.useState(document.hidden);
	React.useEffect(() => {
		const callback = () => {
			setIsDocumentHidden(document.hidden);
		};
		document.addEventListener("visibilitychange", callback);
		return () => window.removeEventListener("visibilitychange", callback);
	}, []);
	return isDocumentHidden;
};
var toastsCounter = 1;
var Observer = class {
	constructor() {
		this.subscribe = (subscriber) => {
			this.subscribers.push(subscriber);
			return () => {
				const index = this.subscribers.indexOf(subscriber);
				this.subscribers.splice(index, 1);
			};
		};
		this.publish = (data) => {
			this.subscribers.forEach((subscriber) => subscriber(data));
		};
		this.addToast = (data) => {
			this.publish(data);
			this.toasts = [...this.toasts, data];
		};
		this.create = (data) => {
			var _data_id;
			const { message, ...rest } = data;
			const id = typeof (data == null ? void 0 : data.id) === "number" || ((_data_id = data.id) == null ? void 0 : _data_id.length) > 0 ? data.id : toastsCounter++;
			const alreadyExists = this.toasts.find((toast) => {
				return toast.id === id;
			});
			const dismissible = data.dismissible === void 0 ? true : data.dismissible;
			if (this.dismissedToasts.has(id)) this.dismissedToasts.delete(id);
			if (alreadyExists) this.toasts = this.toasts.map((toast) => {
				if (toast.id === id) {
					this.publish({
						...toast,
						...data,
						id,
						title: message
					});
					return {
						...toast,
						...data,
						id,
						dismissible,
						title: message
					};
				}
				return toast;
			});
			else this.addToast({
				title: message,
				...rest,
				dismissible,
				id
			});
			return id;
		};
		this.dismiss = (id) => {
			if (id) {
				this.dismissedToasts.add(id);
				requestAnimationFrame(() => this.subscribers.forEach((subscriber) => subscriber({
					id,
					dismiss: true
				})));
			} else this.toasts.forEach((toast) => {
				this.subscribers.forEach((subscriber) => subscriber({
					id: toast.id,
					dismiss: true
				}));
			});
			return id;
		};
		this.message = (message, data) => {
			return this.create({
				...data,
				message
			});
		};
		this.error = (message, data) => {
			return this.create({
				...data,
				message,
				type: "error"
			});
		};
		this.success = (message, data) => {
			return this.create({
				...data,
				type: "success",
				message
			});
		};
		this.info = (message, data) => {
			return this.create({
				...data,
				type: "info",
				message
			});
		};
		this.warning = (message, data) => {
			return this.create({
				...data,
				type: "warning",
				message
			});
		};
		this.loading = (message, data) => {
			return this.create({
				...data,
				type: "loading",
				message
			});
		};
		this.promise = (promise, data) => {
			if (!data) return;
			let id = void 0;
			if (data.loading !== void 0) id = this.create({
				...data,
				promise,
				type: "loading",
				message: data.loading,
				description: typeof data.description !== "function" ? data.description : void 0
			});
			const p = Promise.resolve(promise instanceof Function ? promise() : promise);
			let shouldDismiss = id !== void 0;
			let result;
			const originalPromise = p.then(async (response) => {
				result = ["resolve", response];
				if (React.isValidElement(response)) {
					shouldDismiss = false;
					this.create({
						id,
						type: "default",
						message: response
					});
				} else if (isHttpResponse(response) && !response.ok) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(`HTTP error! status: ${response.status}`) : data.error;
					const description = typeof data.description === "function" ? await data.description(`HTTP error! status: ${response.status}`) : data.description;
					const toastSettings = typeof promiseData === "object" && !React.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				} else if (response instanceof Error) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(response) : data.error;
					const description = typeof data.description === "function" ? await data.description(response) : data.description;
					const toastSettings = typeof promiseData === "object" && !React.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				} else if (data.success !== void 0) {
					shouldDismiss = false;
					const promiseData = typeof data.success === "function" ? await data.success(response) : data.success;
					const description = typeof data.description === "function" ? await data.description(response) : data.description;
					const toastSettings = typeof promiseData === "object" && !React.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "success",
						description,
						...toastSettings
					});
				}
			}).catch(async (error) => {
				result = ["reject", error];
				if (data.error !== void 0) {
					shouldDismiss = false;
					const promiseData = typeof data.error === "function" ? await data.error(error) : data.error;
					const description = typeof data.description === "function" ? await data.description(error) : data.description;
					const toastSettings = typeof promiseData === "object" && !React.isValidElement(promiseData) ? promiseData : { message: promiseData };
					this.create({
						id,
						type: "error",
						description,
						...toastSettings
					});
				}
			}).finally(() => {
				if (shouldDismiss) {
					this.dismiss(id);
					id = void 0;
				}
				data.finally == null || data.finally.call(data);
			});
			const unwrap = () => new Promise((resolve, reject) => originalPromise.then(() => result[0] === "reject" ? reject(result[1]) : resolve(result[1])).catch(reject));
			if (typeof id !== "string" && typeof id !== "number") return { unwrap };
			else return Object.assign(id, { unwrap });
		};
		this.custom = (jsx, data) => {
			const id = (data == null ? void 0 : data.id) || toastsCounter++;
			this.create({
				jsx: jsx(id),
				id,
				...data
			});
			return id;
		};
		this.getActiveToasts = () => {
			return this.toasts.filter((toast) => !this.dismissedToasts.has(toast.id));
		};
		this.subscribers = [];
		this.toasts = [];
		this.dismissedToasts = /* @__PURE__ */ new Set();
	}
};
var ToastState = new Observer();
var toastFunction = (message, data) => {
	const id = (data == null ? void 0 : data.id) || toastsCounter++;
	ToastState.addToast({
		title: message,
		...data,
		id
	});
	return id;
};
var isHttpResponse = (data) => {
	return data && typeof data === "object" && "ok" in data && typeof data.ok === "boolean" && "status" in data && typeof data.status === "number";
};
var basicToast = toastFunction;
var getHistory = () => ToastState.toasts;
var getToasts = () => ToastState.getActiveToasts();
var toast = Object.assign(basicToast, {
	success: ToastState.success,
	info: ToastState.info,
	warning: ToastState.warning,
	error: ToastState.error,
	custom: ToastState.custom,
	message: ToastState.message,
	promise: ToastState.promise,
	dismiss: ToastState.dismiss,
	loading: ToastState.loading
}, {
	getHistory,
	getToasts
});
__insertCSS("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function isAction(action) {
	return action.label !== void 0;
}
var VISIBLE_TOASTS_AMOUNT = 3;
var VIEWPORT_OFFSET = "24px";
var MOBILE_VIEWPORT_OFFSET = "16px";
var TOAST_LIFETIME = 4e3;
var TOAST_WIDTH = 356;
var GAP = 14;
var SWIPE_THRESHOLD = 45;
var TIME_BEFORE_UNMOUNT = 200;
function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}
function getDefaultSwipeDirections(position) {
	const [y, x] = position.split("-");
	const directions = [];
	if (y) directions.push(y);
	if (x) directions.push(x);
	return directions;
}
var Toast = (props) => {
	var _toast_classNames, _toast_classNames1, _toast_classNames2, _toast_classNames3, _toast_classNames4, _toast_classNames5, _toast_classNames6, _toast_classNames7, _toast_classNames8;
	const { invert: ToasterInvert, toast, unstyled, interacting, setHeights, visibleToasts, heights, index, toasts, expanded, removeToast, defaultRichColors, closeButton: closeButtonFromToaster, style, cancelButtonStyle, actionButtonStyle, className = "", descriptionClassName = "", duration: durationFromToaster, position, gap, expandByDefault, classNames, icons, closeButtonAriaLabel = "Close toast" } = props;
	const [swipeDirection, setSwipeDirection] = React.useState(null);
	const [swipeOutDirection, setSwipeOutDirection] = React.useState(null);
	const [mounted, setMounted] = React.useState(false);
	const [removed, setRemoved] = React.useState(false);
	const [swiping, setSwiping] = React.useState(false);
	const [swipeOut, setSwipeOut] = React.useState(false);
	const [isSwiped, setIsSwiped] = React.useState(false);
	const [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0);
	const [initialHeight, setInitialHeight] = React.useState(0);
	const remainingTime = React.useRef(toast.duration || durationFromToaster || TOAST_LIFETIME);
	const dragStartTime = React.useRef(null);
	const toastRef = React.useRef(null);
	const isFront = index === 0;
	const isVisible = index + 1 <= visibleToasts;
	const toastType = toast.type;
	const dismissible = toast.dismissible !== false;
	const toastClassname = toast.className || "";
	const toastDescriptionClassname = toast.descriptionClassName || "";
	const heightIndex = React.useMemo(() => heights.findIndex((height) => height.toastId === toast.id) || 0, [heights, toast.id]);
	const closeButton = React.useMemo(() => {
		var _toast_closeButton;
		return (_toast_closeButton = toast.closeButton) != null ? _toast_closeButton : closeButtonFromToaster;
	}, [toast.closeButton, closeButtonFromToaster]);
	const duration = React.useMemo(() => toast.duration || durationFromToaster || TOAST_LIFETIME, [toast.duration, durationFromToaster]);
	const closeTimerStartTimeRef = React.useRef(0);
	const offset = React.useRef(0);
	const lastCloseTimerStartTimeRef = React.useRef(0);
	const pointerStartRef = React.useRef(null);
	const [y, x] = position.split("-");
	const toastsHeightBefore = React.useMemo(() => {
		return heights.reduce((prev, curr, reducerIndex) => {
			if (reducerIndex >= heightIndex) return prev;
			return prev + curr.height;
		}, 0);
	}, [heights, heightIndex]);
	const isDocumentHidden = useIsDocumentHidden();
	const invert = toast.invert || ToasterInvert;
	const disabled = toastType === "loading";
	offset.current = React.useMemo(() => heightIndex * gap + toastsHeightBefore, [heightIndex, toastsHeightBefore]);
	React.useEffect(() => {
		remainingTime.current = duration;
	}, [duration]);
	React.useEffect(() => {
		setMounted(true);
	}, []);
	React.useEffect(() => {
		const toastNode = toastRef.current;
		if (toastNode) {
			const height = toastNode.getBoundingClientRect().height;
			setInitialHeight(height);
			setHeights((h) => [{
				toastId: toast.id,
				height,
				position: toast.position
			}, ...h]);
			return () => setHeights((h) => h.filter((height) => height.toastId !== toast.id));
		}
	}, [setHeights, toast.id]);
	React.useLayoutEffect(() => {
		if (!mounted) return;
		const toastNode = toastRef.current;
		const originalHeight = toastNode.style.height;
		toastNode.style.height = "auto";
		const newHeight = toastNode.getBoundingClientRect().height;
		toastNode.style.height = originalHeight;
		setInitialHeight(newHeight);
		setHeights((heights) => {
			if (!heights.find((height) => height.toastId === toast.id)) return [{
				toastId: toast.id,
				height: newHeight,
				position: toast.position
			}, ...heights];
			else return heights.map((height) => height.toastId === toast.id ? {
				...height,
				height: newHeight
			} : height);
		});
	}, [
		mounted,
		toast.title,
		toast.description,
		setHeights,
		toast.id,
		toast.jsx,
		toast.action,
		toast.cancel
	]);
	const deleteToast = React.useCallback(() => {
		setRemoved(true);
		setOffsetBeforeRemove(offset.current);
		setHeights((h) => h.filter((height) => height.toastId !== toast.id));
		setTimeout(() => {
			removeToast(toast);
		}, TIME_BEFORE_UNMOUNT);
	}, [
		toast,
		removeToast,
		setHeights,
		offset
	]);
	React.useEffect(() => {
		if (toast.promise && toastType === "loading" || toast.duration === Infinity || toast.type === "loading") return;
		let timeoutId;
		const pauseTimer = () => {
			if (lastCloseTimerStartTimeRef.current < closeTimerStartTimeRef.current) {
				const elapsedTime = (/* @__PURE__ */ new Date()).getTime() - closeTimerStartTimeRef.current;
				remainingTime.current = remainingTime.current - elapsedTime;
			}
			lastCloseTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
		};
		const startTimer = () => {
			if (remainingTime.current === Infinity) return;
			closeTimerStartTimeRef.current = (/* @__PURE__ */ new Date()).getTime();
			timeoutId = setTimeout(() => {
				toast.onAutoClose == null || toast.onAutoClose.call(toast, toast);
				deleteToast();
			}, remainingTime.current);
		};
		if (expanded || interacting || isDocumentHidden) pauseTimer();
		else startTimer();
		return () => clearTimeout(timeoutId);
	}, [
		expanded,
		interacting,
		toast,
		toastType,
		isDocumentHidden,
		deleteToast
	]);
	React.useEffect(() => {
		if (toast.delete) {
			deleteToast();
			toast.onDismiss == null || toast.onDismiss.call(toast, toast);
		}
	}, [deleteToast, toast.delete]);
	function getLoadingIcon() {
		var _toast_classNames;
		if (icons == null ? void 0 : icons.loading) {
			var _toast_classNames1;
			return /* @__PURE__ */ React.createElement("div", {
				className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1.loader, "sonner-loader"),
				"data-visible": toastType === "loading"
			}, icons.loading);
		}
		return /* @__PURE__ */ React.createElement(Loader, {
			className: cn(classNames == null ? void 0 : classNames.loader, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.loader),
			visible: toastType === "loading"
		});
	}
	const icon = toast.icon || (icons == null ? void 0 : icons[toastType]) || getAsset(toastType);
	var _toast_richColors, _icons_close;
	return /* @__PURE__ */ React.createElement("li", {
		tabIndex: 0,
		ref: toastRef,
		className: cn(className, toastClassname, classNames == null ? void 0 : classNames.toast, toast == null ? void 0 : (_toast_classNames = toast.classNames) == null ? void 0 : _toast_classNames.toast, classNames == null ? void 0 : classNames.default, classNames == null ? void 0 : classNames[toastType], toast == null ? void 0 : (_toast_classNames1 = toast.classNames) == null ? void 0 : _toast_classNames1[toastType]),
		"data-sonner-toast": "",
		"data-rich-colors": (_toast_richColors = toast.richColors) != null ? _toast_richColors : defaultRichColors,
		"data-styled": !Boolean(toast.jsx || toast.unstyled || unstyled),
		"data-mounted": mounted,
		"data-promise": Boolean(toast.promise),
		"data-swiped": isSwiped,
		"data-removed": removed,
		"data-visible": isVisible,
		"data-y-position": y,
		"data-x-position": x,
		"data-index": index,
		"data-front": isFront,
		"data-swiping": swiping,
		"data-dismissible": dismissible,
		"data-type": toastType,
		"data-invert": invert,
		"data-swipe-out": swipeOut,
		"data-swipe-direction": swipeOutDirection,
		"data-expanded": Boolean(expanded || expandByDefault && mounted),
		"data-testid": toast.testId,
		style: {
			"--index": index,
			"--toasts-before": index,
			"--z-index": toasts.length - index,
			"--offset": `${removed ? offsetBeforeRemove : offset.current}px`,
			"--initial-height": expandByDefault ? "auto" : `${initialHeight}px`,
			...style,
			...toast.style
		},
		onDragEnd: () => {
			setSwiping(false);
			setSwipeDirection(null);
			pointerStartRef.current = null;
		},
		onPointerDown: (event) => {
			if (event.button === 2) return;
			if (disabled || !dismissible) return;
			dragStartTime.current = /* @__PURE__ */ new Date();
			setOffsetBeforeRemove(offset.current);
			event.target.setPointerCapture(event.pointerId);
			if (event.target.tagName === "BUTTON") return;
			setSwiping(true);
			pointerStartRef.current = {
				x: event.clientX,
				y: event.clientY
			};
		},
		onPointerUp: () => {
			var _toastRef_current, _toastRef_current1, _dragStartTime_current;
			if (swipeOut || !dismissible) return;
			pointerStartRef.current = null;
			const swipeAmountX = Number(((_toastRef_current = toastRef.current) == null ? void 0 : _toastRef_current.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0);
			const swipeAmountY = Number(((_toastRef_current1 = toastRef.current) == null ? void 0 : _toastRef_current1.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0);
			const timeTaken = (/* @__PURE__ */ new Date()).getTime() - ((_dragStartTime_current = dragStartTime.current) == null ? void 0 : _dragStartTime_current.getTime());
			const swipeAmount = swipeDirection === "x" ? swipeAmountX : swipeAmountY;
			const velocity = Math.abs(swipeAmount) / timeTaken;
			if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > .11) {
				setOffsetBeforeRemove(offset.current);
				toast.onDismiss == null || toast.onDismiss.call(toast, toast);
				if (swipeDirection === "x") setSwipeOutDirection(swipeAmountX > 0 ? "right" : "left");
				else setSwipeOutDirection(swipeAmountY > 0 ? "down" : "up");
				deleteToast();
				setSwipeOut(true);
				return;
			} else {
				var _toastRef_current2, _toastRef_current3;
				(_toastRef_current2 = toastRef.current) == null || _toastRef_current2.style.setProperty("--swipe-amount-x", `0px`);
				(_toastRef_current3 = toastRef.current) == null || _toastRef_current3.style.setProperty("--swipe-amount-y", `0px`);
			}
			setIsSwiped(false);
			setSwiping(false);
			setSwipeDirection(null);
		},
		onPointerMove: (event) => {
			var _window_getSelection, _toastRef_current, _toastRef_current1;
			if (!pointerStartRef.current || !dismissible) return;
			if (((_window_getSelection = window.getSelection()) == null ? void 0 : _window_getSelection.toString().length) > 0) return;
			const yDelta = event.clientY - pointerStartRef.current.y;
			const xDelta = event.clientX - pointerStartRef.current.x;
			var _props_swipeDirections;
			const swipeDirections = (_props_swipeDirections = props.swipeDirections) != null ? _props_swipeDirections : getDefaultSwipeDirections(position);
			if (!swipeDirection && (Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1)) setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? "x" : "y");
			let swipeAmount = {
				x: 0,
				y: 0
			};
			const getDampening = (delta) => {
				return 1 / (1.5 + Math.abs(delta) / 20);
			};
			if (swipeDirection === "y") {
				if (swipeDirections.includes("top") || swipeDirections.includes("bottom")) if (swipeDirections.includes("top") && yDelta < 0 || swipeDirections.includes("bottom") && yDelta > 0) swipeAmount.y = yDelta;
				else {
					const dampenedDelta = yDelta * getDampening(yDelta);
					swipeAmount.y = Math.abs(dampenedDelta) < Math.abs(yDelta) ? dampenedDelta : yDelta;
				}
			} else if (swipeDirection === "x") {
				if (swipeDirections.includes("left") || swipeDirections.includes("right")) if (swipeDirections.includes("left") && xDelta < 0 || swipeDirections.includes("right") && xDelta > 0) swipeAmount.x = xDelta;
				else {
					const dampenedDelta = xDelta * getDampening(xDelta);
					swipeAmount.x = Math.abs(dampenedDelta) < Math.abs(xDelta) ? dampenedDelta : xDelta;
				}
			}
			if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) setIsSwiped(true);
			(_toastRef_current = toastRef.current) == null || _toastRef_current.style.setProperty("--swipe-amount-x", `${swipeAmount.x}px`);
			(_toastRef_current1 = toastRef.current) == null || _toastRef_current1.style.setProperty("--swipe-amount-y", `${swipeAmount.y}px`);
		}
	}, closeButton && !toast.jsx && toastType !== "loading" ? /* @__PURE__ */ React.createElement("button", {
		"aria-label": closeButtonAriaLabel,
		"data-disabled": disabled,
		"data-close-button": true,
		onClick: disabled || !dismissible ? () => {} : () => {
			deleteToast();
			toast.onDismiss == null || toast.onDismiss.call(toast, toast);
		},
		className: cn(classNames == null ? void 0 : classNames.closeButton, toast == null ? void 0 : (_toast_classNames2 = toast.classNames) == null ? void 0 : _toast_classNames2.closeButton)
	}, (_icons_close = icons == null ? void 0 : icons.close) != null ? _icons_close : CloseIcon) : null, (toastType || toast.icon || toast.promise) && toast.icon !== null && ((icons == null ? void 0 : icons[toastType]) !== null || toast.icon) ? /* @__PURE__ */ React.createElement("div", {
		"data-icon": "",
		className: cn(classNames == null ? void 0 : classNames.icon, toast == null ? void 0 : (_toast_classNames3 = toast.classNames) == null ? void 0 : _toast_classNames3.icon)
	}, toast.promise || toast.type === "loading" && !toast.icon ? toast.icon || getLoadingIcon() : null, toast.type !== "loading" ? icon : null) : null, /* @__PURE__ */ React.createElement("div", {
		"data-content": "",
		className: cn(classNames == null ? void 0 : classNames.content, toast == null ? void 0 : (_toast_classNames4 = toast.classNames) == null ? void 0 : _toast_classNames4.content)
	}, /* @__PURE__ */ React.createElement("div", {
		"data-title": "",
		className: cn(classNames == null ? void 0 : classNames.title, toast == null ? void 0 : (_toast_classNames5 = toast.classNames) == null ? void 0 : _toast_classNames5.title)
	}, toast.jsx ? toast.jsx : typeof toast.title === "function" ? toast.title() : toast.title), toast.description ? /* @__PURE__ */ React.createElement("div", {
		"data-description": "",
		className: cn(descriptionClassName, toastDescriptionClassname, classNames == null ? void 0 : classNames.description, toast == null ? void 0 : (_toast_classNames6 = toast.classNames) == null ? void 0 : _toast_classNames6.description)
	}, typeof toast.description === "function" ? toast.description() : toast.description) : null), /* @__PURE__ */ React.isValidElement(toast.cancel) ? toast.cancel : toast.cancel && isAction(toast.cancel) ? /* @__PURE__ */ React.createElement("button", {
		"data-button": true,
		"data-cancel": true,
		style: toast.cancelButtonStyle || cancelButtonStyle,
		onClick: (event) => {
			if (!isAction(toast.cancel)) return;
			if (!dismissible) return;
			toast.cancel.onClick == null || toast.cancel.onClick.call(toast.cancel, event);
			deleteToast();
		},
		className: cn(classNames == null ? void 0 : classNames.cancelButton, toast == null ? void 0 : (_toast_classNames7 = toast.classNames) == null ? void 0 : _toast_classNames7.cancelButton)
	}, toast.cancel.label) : null, /* @__PURE__ */ React.isValidElement(toast.action) ? toast.action : toast.action && isAction(toast.action) ? /* @__PURE__ */ React.createElement("button", {
		"data-button": true,
		"data-action": true,
		style: toast.actionButtonStyle || actionButtonStyle,
		onClick: (event) => {
			if (!isAction(toast.action)) return;
			toast.action.onClick == null || toast.action.onClick.call(toast.action, event);
			if (event.defaultPrevented) return;
			deleteToast();
		},
		className: cn(classNames == null ? void 0 : classNames.actionButton, toast == null ? void 0 : (_toast_classNames8 = toast.classNames) == null ? void 0 : _toast_classNames8.actionButton)
	}, toast.action.label) : null);
};
function getDocumentDirection() {
	if (typeof window === "undefined") return "ltr";
	if (typeof document === "undefined") return "ltr";
	const dirAttribute = document.documentElement.getAttribute("dir");
	if (dirAttribute === "auto" || !dirAttribute) return window.getComputedStyle(document.documentElement).direction;
	return dirAttribute;
}
function assignOffset(defaultOffset, mobileOffset) {
	const styles = {};
	[defaultOffset, mobileOffset].forEach((offset, index) => {
		const isMobile = index === 1;
		const prefix = isMobile ? "--mobile-offset" : "--offset";
		const defaultValue = isMobile ? MOBILE_VIEWPORT_OFFSET : VIEWPORT_OFFSET;
		function assignAll(offset) {
			[
				"top",
				"right",
				"bottom",
				"left"
			].forEach((key) => {
				styles[`${prefix}-${key}`] = typeof offset === "number" ? `${offset}px` : offset;
			});
		}
		if (typeof offset === "number" || typeof offset === "string") assignAll(offset);
		else if (typeof offset === "object") [
			"top",
			"right",
			"bottom",
			"left"
		].forEach((key) => {
			if (offset[key] === void 0) styles[`${prefix}-${key}`] = defaultValue;
			else styles[`${prefix}-${key}`] = typeof offset[key] === "number" ? `${offset[key]}px` : offset[key];
		});
		else assignAll(defaultValue);
	});
	return styles;
}
var Toaster$1 = /* @__PURE__ */ React.forwardRef(function Toaster(props, ref) {
	const { id, invert, position = "bottom-right", hotkey = ["altKey", "KeyT"], expand, closeButton, className, offset, mobileOffset, theme = "light", richColors, duration, style, visibleToasts = VISIBLE_TOASTS_AMOUNT, toastOptions, dir = getDocumentDirection(), gap = GAP, icons, containerAriaLabel = "Notifications" } = props;
	const [toasts, setToasts] = React.useState([]);
	const filteredToasts = React.useMemo(() => {
		if (id) return toasts.filter((toast) => toast.toasterId === id);
		return toasts.filter((toast) => !toast.toasterId);
	}, [toasts, id]);
	const possiblePositions = React.useMemo(() => {
		return Array.from(new Set([position].concat(filteredToasts.filter((toast) => toast.position).map((toast) => toast.position))));
	}, [filteredToasts, position]);
	const [heights, setHeights] = React.useState([]);
	const [expanded, setExpanded] = React.useState(false);
	const [interacting, setInteracting] = React.useState(false);
	const [actualTheme, setActualTheme] = React.useState(theme !== "system" ? theme : typeof window !== "undefined" ? window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "light");
	const listRef = React.useRef(null);
	const hotkeyLabel = hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
	const lastFocusedElementRef = React.useRef(null);
	const isFocusWithinRef = React.useRef(false);
	const removeToast = React.useCallback((toastToRemove) => {
		setToasts((toasts) => {
			var _toasts_find;
			if (!((_toasts_find = toasts.find((toast) => toast.id === toastToRemove.id)) == null ? void 0 : _toasts_find.delete)) ToastState.dismiss(toastToRemove.id);
			return toasts.filter(({ id }) => id !== toastToRemove.id);
		});
	}, []);
	React.useEffect(() => {
		return ToastState.subscribe((toast) => {
			if (toast.dismiss) {
				requestAnimationFrame(() => {
					setToasts((toasts) => toasts.map((t) => t.id === toast.id ? {
						...t,
						delete: true
					} : t));
				});
				return;
			}
			setTimeout(() => {
				ReactDOM.flushSync(() => {
					setToasts((toasts) => {
						const indexOfExistingToast = toasts.findIndex((t) => t.id === toast.id);
						if (indexOfExistingToast !== -1) return [
							...toasts.slice(0, indexOfExistingToast),
							{
								...toasts[indexOfExistingToast],
								...toast
							},
							...toasts.slice(indexOfExistingToast + 1)
						];
						return [toast, ...toasts];
					});
				});
			});
		});
	}, [toasts]);
	React.useEffect(() => {
		if (theme !== "system") {
			setActualTheme(theme);
			return;
		}
		if (theme === "system") if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setActualTheme("dark");
		else setActualTheme("light");
		if (typeof window === "undefined") return;
		const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		try {
			darkMediaQuery.addEventListener("change", ({ matches }) => {
				if (matches) setActualTheme("dark");
				else setActualTheme("light");
			});
		} catch (error) {
			darkMediaQuery.addListener(({ matches }) => {
				try {
					if (matches) setActualTheme("dark");
					else setActualTheme("light");
				} catch (e) {
					console.error(e);
				}
			});
		}
	}, [theme]);
	React.useEffect(() => {
		if (toasts.length <= 1) setExpanded(false);
	}, [toasts]);
	React.useEffect(() => {
		const handleKeyDown = (event) => {
			var _listRef_current;
			if (hotkey.every((key) => event[key] || event.code === key)) {
				var _listRef_current1;
				setExpanded(true);
				(_listRef_current1 = listRef.current) == null || _listRef_current1.focus();
			}
			if (event.code === "Escape" && (document.activeElement === listRef.current || ((_listRef_current = listRef.current) == null ? void 0 : _listRef_current.contains(document.activeElement)))) setExpanded(false);
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [hotkey]);
	React.useEffect(() => {
		if (listRef.current) return () => {
			if (lastFocusedElementRef.current) {
				lastFocusedElementRef.current.focus({ preventScroll: true });
				lastFocusedElementRef.current = null;
				isFocusWithinRef.current = false;
			}
		};
	}, [listRef.current]);
	return /* @__PURE__ */ React.createElement("section", {
		ref,
		"aria-label": `${containerAriaLabel} ${hotkeyLabel}`,
		tabIndex: -1,
		"aria-live": "polite",
		"aria-relevant": "additions text",
		"aria-atomic": "false",
		suppressHydrationWarning: true
	}, possiblePositions.map((position, index) => {
		var _heights_;
		const [y, x] = position.split("-");
		if (!filteredToasts.length) return null;
		return /* @__PURE__ */ React.createElement("ol", {
			key: position,
			dir: dir === "auto" ? getDocumentDirection() : dir,
			tabIndex: -1,
			ref: listRef,
			className,
			"data-sonner-toaster": true,
			"data-sonner-theme": actualTheme,
			"data-y-position": y,
			"data-x-position": x,
			style: {
				"--front-toast-height": `${((_heights_ = heights[0]) == null ? void 0 : _heights_.height) || 0}px`,
				"--width": `${TOAST_WIDTH}px`,
				"--gap": `${gap}px`,
				...style,
				...assignOffset(offset, mobileOffset)
			},
			onBlur: (event) => {
				if (isFocusWithinRef.current && !event.currentTarget.contains(event.relatedTarget)) {
					isFocusWithinRef.current = false;
					if (lastFocusedElementRef.current) {
						lastFocusedElementRef.current.focus({ preventScroll: true });
						lastFocusedElementRef.current = null;
					}
				}
			},
			onFocus: (event) => {
				if (event.target instanceof HTMLElement && event.target.dataset.dismissible === "false") return;
				if (!isFocusWithinRef.current) {
					isFocusWithinRef.current = true;
					lastFocusedElementRef.current = event.relatedTarget;
				}
			},
			onMouseEnter: () => setExpanded(true),
			onMouseMove: () => setExpanded(true),
			onMouseLeave: () => {
				if (!interacting) setExpanded(false);
			},
			onDragEnd: () => setExpanded(false),
			onPointerDown: (event) => {
				if (event.target instanceof HTMLElement && event.target.dataset.dismissible === "false") return;
				setInteracting(true);
			},
			onPointerUp: () => setInteracting(false)
		}, filteredToasts.filter((toast) => !toast.position && index === 0 || toast.position === position).map((toast, index) => {
			var _toastOptions_duration, _toastOptions_closeButton;
			return /* @__PURE__ */ React.createElement(Toast, {
				key: toast.id,
				icons,
				index,
				toast,
				defaultRichColors: richColors,
				duration: (_toastOptions_duration = toastOptions == null ? void 0 : toastOptions.duration) != null ? _toastOptions_duration : duration,
				className: toastOptions == null ? void 0 : toastOptions.className,
				descriptionClassName: toastOptions == null ? void 0 : toastOptions.descriptionClassName,
				invert,
				visibleToasts,
				closeButton: (_toastOptions_closeButton = toastOptions == null ? void 0 : toastOptions.closeButton) != null ? _toastOptions_closeButton : closeButton,
				interacting,
				position,
				style: toastOptions == null ? void 0 : toastOptions.style,
				unstyled: toastOptions == null ? void 0 : toastOptions.unstyled,
				classNames: toastOptions == null ? void 0 : toastOptions.classNames,
				cancelButtonStyle: toastOptions == null ? void 0 : toastOptions.cancelButtonStyle,
				actionButtonStyle: toastOptions == null ? void 0 : toastOptions.actionButtonStyle,
				closeButtonAriaLabel: toastOptions == null ? void 0 : toastOptions.closeButtonAriaLabel,
				removeToast,
				toasts: filteredToasts.filter((t) => t.position == toast.position),
				heights: heights.filter((h) => h.position == toast.position),
				setHeights,
				expandByDefault: expand,
				gap,
				expanded,
				swipeDirections: props.swipeDirections
			});
		}));
	}));
});
//#endregion
//#region src/components/shadcn/ui/sonner.tsx
var Toaster = ({ ...props }) => {
	const { theme = "system" } = useTheme();
	return /* @__PURE__ */ jsx(Toaster$1, {
		theme,
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ jsx(CircleCheck, { className: "size-4" }),
			info: /* @__PURE__ */ jsx(Info, { className: "size-4" }),
			warning: /* @__PURE__ */ jsx(TriangleAlert, { className: "size-4" }),
			error: /* @__PURE__ */ jsx(OctagonX, { className: "size-4" }),
			loading: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-4 animate-spin" })
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: { toast: "cn-toast" } },
		...props
	});
};
//#endregion
//#region src/components/shadcn/ui/dialog.tsx
function Dialog$1({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Root, {
		"data-slot": "dialog",
		...props
	});
}
function DialogTrigger({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Trigger, {
		"data-slot": "dialog-trigger",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Portal, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogClose({ ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Close, {
		"data-slot": "dialog-close",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Backdrop, {
		"data-slot": "dialog-overlay",
		className: cn$1("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
		...props
	});
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
	return /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(Dialog.Popup, {
		"data-slot": "dialog-content",
		className: cn$1("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsxs(Dialog.Close, {
			"data-slot": "dialog-close",
			render: /* @__PURE__ */ jsx(Button$2, {
				variant: "ghost",
				className: "absolute top-2 right-2",
				size: "icon-sm"
			}),
			children: [/* @__PURE__ */ jsx(X, {}), /* @__PURE__ */ jsx("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] });
}
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "dialog-header",
		className: cn$1("flex flex-col gap-2", className),
		...props
	});
}
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		"data-slot": "dialog-footer",
		className: cn$1("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
		...props,
		children: [children, showCloseButton && /* @__PURE__ */ jsx(Dialog.Close, {
			render: /* @__PURE__ */ jsx(Button$2, { variant: "outline" }),
			children: "Close"
		})]
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Title, {
		"data-slot": "dialog-title",
		className: cn$1("text-base leading-none font-medium", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ jsx(Dialog.Description, {
		"data-slot": "dialog-description",
		className: cn$1("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/input-group.tsx
function InputGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-slot": "input-group",
		role: "group",
		className: cn$1("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
		...props
	});
}
var inputGroupAddonVariants = cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
	variants: { align: {
		"inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
		"inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
		"block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
		"block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
	} },
	defaultVariants: { align: "inline-start" }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
	return /* @__PURE__ */ jsx("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": align,
		className: cn$1(inputGroupAddonVariants({ align }), className),
		onClick: (e) => {
			if (e.target.closest("button")) return;
			e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...props
	});
}
var inputGroupButtonVariants = cva("flex items-center gap-2 text-sm shadow-none", {
	variants: { size: {
		xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
		sm: "",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
	return /* @__PURE__ */ jsx(Button$2, {
		type,
		"data-size": size,
		variant,
		className: cn$1(inputGroupButtonVariants({ size }), className),
		...props
	});
}
function InputGroupInput({ className, ...props }) {
	return /* @__PURE__ */ jsx(Input$1, {
		"data-slot": "input-group-control",
		className: cn$1("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
		...props
	});
}
//#endregion
//#region src/components/shadcn/ui/combobox.tsx
var Combobox$1 = Combobox.Root;
function ComboboxValue({ ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Value, {
		"data-slot": "combobox-value",
		...props
	});
}
function ComboboxTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Trigger, {
		"data-slot": "combobox-trigger",
		className: cn$1("[&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "pointer-events-none size-4 text-muted-foreground" })]
	});
}
function ComboboxClear({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Clear, {
		"data-slot": "combobox-clear",
		render: /* @__PURE__ */ jsx(InputGroupButton, {
			variant: "ghost",
			size: "icon-xs"
		}),
		className: cn$1(className),
		...props,
		children: /* @__PURE__ */ jsx(X, { className: "pointer-events-none" })
	});
}
function ComboboxInput({ className, children, disabled = false, showTrigger = true, showClear = false, ...props }) {
	return /* @__PURE__ */ jsxs(InputGroup, {
		className: cn$1("w-auto", className),
		children: [
			/* @__PURE__ */ jsx(Combobox.Input, {
				render: /* @__PURE__ */ jsx(InputGroupInput, { disabled }),
				...props
			}),
			/* @__PURE__ */ jsxs(InputGroupAddon, {
				align: "inline-end",
				children: [showTrigger && /* @__PURE__ */ jsx(InputGroupButton, {
					size: "icon-xs",
					variant: "ghost",
					render: /* @__PURE__ */ jsx(ComboboxTrigger, {}),
					"data-slot": "input-group-button",
					className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
					disabled
				}), showClear && /* @__PURE__ */ jsx(ComboboxClear, { disabled })]
			}),
			children
		]
	});
}
function ComboboxContent({ className, side = "bottom", sideOffset = 6, align = "start", alignOffset = 0, anchor, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Portal, { children: /* @__PURE__ */ jsx(Combobox.Positioner, {
		side,
		sideOffset,
		align,
		alignOffset,
		anchor,
		className: "isolate z-50",
		children: /* @__PURE__ */ jsx(Combobox.Popup, {
			"data-slot": "combobox-content",
			"data-chips": !!anchor,
			className: cn$1("group/combobox-content relative max-h-(--available-height) w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
			...props
		})
	}) });
}
function ComboboxList({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.List, {
		"data-slot": "combobox-list",
		className: cn$1("no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1 data-empty:p-0", className),
		...props
	});
}
function ComboboxItem({ className, children, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Item, {
		"data-slot": "combobox-item",
		className: cn$1("relative flex w-full cursor-default items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(Combobox.ItemIndicator, {
			render: /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
			children: /* @__PURE__ */ jsx(Check, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxGroup({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Group, {
		"data-slot": "combobox-group",
		className: cn$1(className),
		...props
	});
}
function ComboboxLabel({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.GroupLabel, {
		"data-slot": "combobox-label",
		className: cn$1("px-2 py-1.5 text-xs text-muted-foreground", className),
		...props
	});
}
function ComboboxCollection({ ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Collection, {
		"data-slot": "combobox-collection",
		...props
	});
}
function ComboboxEmpty({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Empty, {
		"data-slot": "combobox-empty",
		className: cn$1("hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex", className),
		...props
	});
}
function ComboboxSeparator({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Separator, {
		"data-slot": "combobox-separator",
		className: cn$1("-mx-1 my-1 h-px bg-border", className),
		...props
	});
}
function ComboboxChips({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Chips, {
		"data-slot": "combobox-chips",
		className: cn$1("flex min-h-8 flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40", className),
		...props
	});
}
function ComboboxChip({ className, children, showRemove = true, ...props }) {
	return /* @__PURE__ */ jsxs(Combobox.Chip, {
		"data-slot": "combobox-chip",
		className: cn$1("flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0", className),
		...props,
		children: [children, showRemove && /* @__PURE__ */ jsx(Combobox.ChipRemove, {
			render: /* @__PURE__ */ jsx(Button$2, {
				variant: "ghost",
				size: "icon-xs"
			}),
			className: "-ml-1 opacity-50 hover:opacity-100",
			"data-slot": "combobox-chip-remove",
			children: /* @__PURE__ */ jsx(X, { className: "pointer-events-none" })
		})]
	});
}
function ComboboxChipsInput({ className, ...props }) {
	return /* @__PURE__ */ jsx(Combobox.Input, {
		"data-slot": "combobox-chip-input",
		className: cn$1("min-w-16 flex-1 outline-none", className),
		...props
	});
}
function useComboboxAnchor() {
	return React$1.useRef(null);
}
//#endregion
export { buttonGroupVariantsConfig as $, Select$1 as A, Carousel as B, DialogOverlay as C, Toaster as D, DialogTrigger as E, SelectScrollDownButton as F, useCarousel as G, CarouselItem as H, SelectScrollUpButton as I, CalendarDayButton as J, Checkbox$1 as K, SelectSeparator as L, SelectGroup as M, SelectItem as N, toast as O, SelectLabel as P, buttonGroupVariants as Q, SelectTrigger as R, DialogHeader as S, DialogTitle as T, CarouselNext as U, CarouselContent as V, CarouselPrevious as W, ButtonGroupSeparator as X, ButtonGroup as Y, ButtonGroupText as Z, Dialog$1 as _, ComboboxCollection as a, AlertDescription as at, DialogDescription as b, ComboboxGroup as c, AccordionContent as ct, ComboboxLabel as d, Button$2 as dt, Badge as et, ComboboxList as f, buttonVariants as ft, useComboboxAnchor as g, ComboboxValue as h, __exportAll as ht, ComboboxChipsInput as i, AlertAction as it, SelectContent as j, Input$1 as k, ComboboxInput as l, AccordionItem as lt, ComboboxTrigger as m, cn$1 as mt, ComboboxChip as n, badgeVariantsConfig as nt, ComboboxContent as o, AlertTitle as ot, ComboboxSeparator as p, buttonVariantsConfig as pt, Calendar as q, ComboboxChips as r, Alert as rt, ComboboxEmpty as s, Accordion$1 as st, Combobox$1 as t, badgeVariants as tt, ComboboxItem as u, AccordionTrigger as ut, DialogClose as v, DialogPortal as w, DialogFooter as x, DialogContent as y, SelectValue as z };
